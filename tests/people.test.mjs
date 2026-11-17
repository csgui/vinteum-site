import assert from "node:assert/strict";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { filterPeople, formatPersonDate, getDirectoryRole } from "../src/data/people.ts";
import { getPerson, parseProfile, readPeople } from "../src/lib/people.ts";

const minimal = "---\nname: Álvaro\n---\n";

test("loads bilingual Markdown and derives the slug from the filename", () => {
    const person = parseProfile("alvaro.md", `${minimal}\n## EN\n\n**English**\n\n## PT\n\nPortuguês\n`);
    assert.equal(person.slug, "alvaro");
    assert.deepEqual(person.bio, { EN: "**English**", BR: "Português" });
    assert.deepEqual(person.programs, []);
    assert.equal(person.image, undefined);
    assert.equal(parseProfile("alvaro.md", minimal).bio, undefined);
});

test("rejects invalid slugs, missing names and unsupported link protocols", () => {
    assert.throws(() => parseProfile("Bad Slug.md", minimal), /Bad Slug\.md/);
    assert.throws(() => parseProfile("without-name.md", ""), /without-name\.md/);
    assert.throws(() => parseProfile("bad-link.md", "---\nname: Álvaro\nlinks:\n  - label: Bad\n    href: javascript:alert(1)\n---\n"), /bad-link\.md/);
});

test("a Markdown file alone adds a searchable directory entry", (context) => {
    const directory = mkdtempSync(join(tmpdir(), "vinteum-people-"));
    context.after(() => rmSync(directory, { recursive: true, force: true }));
    writeFileSync(join(directory, "README.md"), "# Documentation");
    writeFileSync(join(directory, "alvaro.md"), minimal);
    const people = readPeople(directory);
    assert.deepEqual(people.map(({ slug }) => slug), ["alvaro"]);
    assert.equal(filterPeople(people, { role: "all", query: "alvaro", focus: "", locale: "EN" }).length, 1);
});

test("maintains one identity per contributor and covers the published program rosters", () => {
    const people = readPeople();
    const canonicalLinks = people.flatMap(({ links }) =>
        links.filter(({ icon }) => icon === "github").map(({ href }) => href.toLowerCase().replace(/\/$/, "")),
    );
    assert.equal(new Set(canonicalLinks).size, canonicalLinks.length);

    const count = (program, status) => people.filter(({ programs }) =>
        programs.some((entry) => entry.organization === "Vinteum" && entry.program === program && entry.status === status),
    ).length;
    assert.ok(count("fellowship", "current") >= 12);
    assert.ok(count("fellowship", "past") >= 13);
    assert.ok(count("grants", "current") >= 8);

    for (const slug of ["erick-cestari", "thgo-o"]) {
        const person = getPerson(slug);
        assert.ok(person);
        assert.equal(getDirectoryRole(person), "grantee");
        assert.ok(person.programs.some(({ program, status }) => program === "fellowship" && status === "past"));
        assert.ok(!filterPeople(people, { role: "alumni", focus: "", query: "", locale: "EN" })
            .some((match) => match.slug === slug));
    }
    assert.equal(getPerson("k-yu")?.name, "K-YU");
    assert.ok(getPerson("caio"));
    assert.equal(getPerson("marina-okada"), undefined);
    assert.equal(getPerson("nullbyte"), undefined);
    assert.equal(getPerson("README"), undefined);

    for (const person of people) {
        for (const image of [person.image, person.alternateImage, ...person.media.map(({ thumbnail }) => thumbnail)]) {
            if (image) assert.ok(existsSync(join("public", image)), `Missing local image: ${image}`);
        }
    }
});

test("keeps the four additional prototype profiles discoverable with their editorial content", () => {
    const people = readPeople();
    for (const [slug, role] of [
        ["bruno-garcia", "team"], ["edil-medeiros", "team"],
        ["carlos-santos", "fellow"], ["raphael-dutenkefer", "fellow"],
    ]) {
        const person = getPerson(slug);
        assert.ok(person?.bio?.EN && person.bio.BR, slug);
        assert.ok(person.links.some(({ icon }) => icon === "github"), slug);
        assert.ok(person.writing.length + person.contributions.length + person.discussions.length > 0, slug);
        assert.ok(filterPeople(people, { role, focus: "", query: person.name, locale: "EN" })
            .some((match) => match.slug === slug), slug);
        if (role === "fellow") {
            assert.ok(person.programs.some(({ program, organization, status }) =>
                program === "fellowship" && organization === "Vinteum" && status === "current",
            ), slug);
        } else {
            assert.equal(person.programs.length, 0, slug);
        }
    }
    const githubLinks = getPerson("yan").links.filter(({ icon }) => icon === "github");
    assert.ok(githubLinks.some(({ href }) => href === "https://github.com/yan-pi"));
    assert.ok(githubLinks.some(({ href }) => href === "https://github.com/yanfsb"));
});

test("retains date precision when only a year or a month is known", () => {
    assert.equal(formatPersonDate("2025", "EN"), "2025");
    assert.equal(formatPersonDate("2025-05", "EN"), "May 2025");
});

const baseUrl = process.env.PEOPLE_TEST_URL;
test("built directory links to every canonical profile and unknown profiles return 404", { skip: !baseUrl }, async () => {
    const directory = await fetch(new URL("/people", baseUrl));
    assert.equal(directory.status, 200);
    const html = await directory.text();
    const people = readPeople();
    const directorySlugs = new Set([...html.matchAll(/href="\/people\/([a-z0-9-]+)"/g)].map((match) => match[1]));
    assert.deepEqual(directorySlugs, new Set(people.map(({ slug }) => slug)));

    await Promise.all(people.map(async ({ slug }) => {
        const route = `/people/${slug}`;
        const response = await fetch(new URL(route, baseUrl));
        assert.equal(response.status, 200, route);
        const profile = await response.text();
        assert.match(profile, /<h1[^>]+id="person-title"/, route);
        assert.match(profile, new RegExp(`<link rel="canonical" href="[^"]+${route}"`), route);
    }));

    const missing = await fetch(new URL("/people/no-such-contributor", baseUrl));
    assert.equal(missing.status, 404);
    const sitemap = await fetch(new URL("/sitemap.xml", baseUrl));
    const xml = await sitemap.text();
    for (const { slug } of people) assert.ok(xml.includes(`/people/${slug}</loc>`));
});
