import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { filterPeople, formatPersonDate, getDirectoryRole } from "../src/data/people.ts";
import * as profileData from "../src/data/people.ts";
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

test("loads academic publications with citation metadata separately from writing", () => {
    const citation = {
        id: "paper-fixture",
        title: { EN: "Paper fixture", BR: "Artigo de teste" },
        date: "2025",
        authors: ["Example Author", "Example Coauthor"],
        venue: "Example conference",
        publicationType: "paper",
        href: "https://example.org/paper",
    };
    const person = parseProfile("academic.md", `---\nname: Academic fixture\npublications: ${JSON.stringify([citation])}\n---\n`);
    assert.deepEqual(person.publications, [citation]);
    assert.deepEqual(person.writing, []);
    assert.deepEqual(parseProfile("minimal.md", minimal).publications, []);
});

test("preserves preprint status and DOI without presenting it as a published journal paper", () => {
    const citation = {
        id: "preprint-fixture",
        title: { EN: "Preprint fixture", BR: "Preprint de teste" },
        authors: ["Example Author"],
        venue: "Example preprint repository",
        publicationType: "preprint",
        doi: "10.1234/example",
        href: "https://example.org/preprint",
    };
    const person = parseProfile("preprint.md", `---\nname: Academic fixture\npublications: ${JSON.stringify([citation])}\n---\n`);
    assert.deepEqual(person.publications, [citation]);
});

test("shows an academic-publications section only when a profile has publications", () => {
    assert.equal(typeof profileData.getProfileSections, "function");
    const person = parseProfile("academic.md", minimal);
    assert.deepEqual(profileData.getProfileSections(person), []);
    const withPaper = { ...person, publications: [{ id: "paper-fixture" }] };
    assert.deepEqual(profileData.getProfileSections(withPaper), ["publications"]);
    assert.deepEqual(profileData.getProfileSections({ ...withPaper, writing: [{ id: "blog-fixture" }] }), ["writing", "publications"]);
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
    // Relationship snapshot checked against the canonical register on 2026-11-17.
    // The public programme pages keep independent rosters and may lag this directory.
    assert.equal(count("fellowship", "current"), 11);
    assert.equal(count("fellowship", "past"), 13);
    assert.equal(count("grants", "current"), 7);
    assert.equal(count("grants", "past"), 1);

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

test("provides translated contribution-type labels without changing filter identifiers", () => {
    const types = ["PR", "Code Review", "Research", "Tooling", "Documentation", "Protocol Specification"];
    for (const locale of ["en", "pt"]) {
        const labels = JSON.parse(readFileSync(new URL(`../src/i18n/locales/${locale}.json`, import.meta.url), "utf8"))
            .people.contributionTypes;
        assert.ok(labels, `Missing contribution labels for ${locale}`);
        for (const type of types) assert.ok(labels[type]?.trim(), `${locale}: ${type}`);
    }
    const portuguese = JSON.parse(readFileSync(new URL("../src/i18n/locales/pt.json", import.meta.url), "utf8"));
    assert.equal(portuguese.people.contributionTypes.Documentation, "Documentação");
    assert.equal(portuguese.people.contributionTypes["Protocol Specification"], "Especificação de protocolo");
});

test("BDL-only alumni remain filterable without inventing a fellowship", () => {
    const person = parseProfile("alvaro.md", `---
name: Álvaro
programs:
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role: { EN: Alumnus, BR: Ex-participante }
    status: past
---
`);
    assert.equal(getDirectoryRole(person), "alumni");
    assert.equal(filterPeople([person], { role: "alumni", focus: "", query: "", locale: "EN" }).length, 1);
});

test("keeps relationship history separate from current funding and employment", () => {
    for (const slug of ["jayr-motta", "octavio-lucca", "renato-britto", "victor-andre"]) {
        const person = getPerson(slug);
        const fellowship = person.programs.find(({ program }) => program === "fellowship");
        assert.equal(fellowship.status, "past", slug);
        assert.equal(fellowship.end, "2026-09", slug);
        assert.ok(getDirectoryRole(person) !== "fellow", slug);
    }
    const leo = getPerson("leonardo-lima");
    assert.equal(leo.programs.find(({ program }) => program === "grants").end, "2026-08");
    assert.ok(getDirectoryRole(leo) !== "grantee");
    assert.ok(leo.affiliations.some(({ organization, status }) => organization === "Btrust" && status === "current"));
    assert.ok(getDirectoryRole(getPerson("themhv")) === "fellow");
    for (const slug of ["caio", "lang", "joaozinho"]) {
        assert.ok(!getPerson(slug).programs.some(({ program }) => program === "fellowship"), slug);
        assert.ok(getDirectoryRole(getPerson(slug)) === "alumni", slug);
    }
    assert.equal(getPerson("luca0x46").programs.find(({ program }) => program === "fellowship").work.EN, "Floresta");
});

test("displays grants and fellowships as affiliations without duplicating programme history", () => {
    assert.equal(typeof profileData.getProfileRelationships, "function");
    const person = parseProfile("alvaro.md", `---
name: Álvaro
affiliations:
  - organization: External project
    role: { EN: Developer, BR: Desenvolvedor }
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role: { EN: Fellow, BR: Fellow }
    status: past
    start: '2025-03'
    end: '2025-08'
    work: { EN: Floresta, BR: Floresta }
    description: { EN: Functional testing, BR: Testes funcionais }
  - program: grants
    name: Grants
    organization: Vinteum
    role: { EN: Grantee, BR: Bolsista }
    status: current
    start: '2026-01'
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role: { EN: Alumnus, BR: Ex-participante }
    status: past
    cohort: 1
---
`);
    const before = JSON.stringify(person);
    const { affiliations, programs } = profileData.getProfileRelationships(person);
    assert.deepEqual(affiliations.map(({ role }) => role.EN), ["Developer", "Fellow", "Grantee"]);
    assert.deepEqual(programs.map(({ program }) => program), ["bitcoin-dev-launchpad"]);
    assert.equal(affiliations[1].start, "2025-03");
    assert.equal(affiliations[1].end, "2025-08");
    assert.equal(affiliations[1].description.BR, "Testes funcionais");
    assert.equal(affiliations[1].work.EN, "Floresta");
    assert.equal(affiliations[2].status, "current");
    assert.equal(getDirectoryRole(person), "grantee");
    assert.equal(JSON.stringify(person), before);
});

test("keeps bios short and link-free while details live in profile sections", () => {
    for (const person of readPeople()) {
        for (const locale of ["EN", "BR"]) {
            const bio = person.bio?.[locale];
            assert.ok(bio?.trim(), `${person.slug}: ${locale}`);
            assert.ok(bio.trim().split(/\s+/u).length <= 55, `${person.slug}: ${locale} bio exceeds 55 words`);
            assert.doesNotMatch(bio, /\n\s*\n|https?:\/\/|\]\(|<a\b/i, `${person.slug}: ${locale} bio must be one link-free paragraph`);
            assert.doesNotMatch(bio, /according to|relatório|annual report|year-four report|alumni retrospective/i, `${person.slug}: ${locale} bio contains source scaffolding`);
        }
    }
});

test("includes external grants as affiliations alongside Vinteum fellowship history", () => {
    const expected = [
        ["joao-leal", "OpenSats"],
        ["joaozinho", "OpenSats"],
        ["lucas-balieiro", "OpenSats"],
        ["luis-schwab", "Bitcoin Dev Kit Foundation"],
        ["luis-schwab", "Human Rights Foundation (Bitcoin Development Fund)"],
        ["moises-pompilio", "OpenSats"],
        ["guilherme-martins", "OpenSats"],
        ["renato-britto", "Spiral"],
        ["leonardo-lima", "Btrust"],
        ["plebhash", "Btrust"],
    ];
    for (const [slug, organization] of expected) {
        const { affiliations } = profileData.getProfileRelationships(getPerson(slug));
        const entries = affiliations.filter((entry) => entry.organization === organization);
        assert.equal(entries.length, 1, `${slug}: ${organization}`);
        assert.equal(entries[0].role.EN, "Grantee", `${slug}: ${organization}`);
        assert.equal(entries[0].status, "current", `${slug}: ${organization}`);
    }
    for (const slug of ["luis-schwab", "moises-pompilio"]) {
        const { affiliations, programs } = profileData.getProfileRelationships(getPerson(slug));
        assert.ok(affiliations.some(({ organization, role, status }) =>
            organization === "Vinteum" && role.EN === "Fellow" && status === "past"), slug);
        assert.ok(programs.every(({ program }) => program !== "fellowship" && program !== "grants"), slug);
        assert.equal(getDirectoryRole(getPerson(slug)), "alumni", slug);
    }
});

test("provides a local logo for every affiliation organization and initials only for unknown names", () => {
    assert.equal(typeof profileData.getOrganizationLogo, "function");
    const organizations = new Set(readPeople().flatMap((person) =>
        profileData.getProfileRelationships(person).affiliations.map(({ organization }) => organization)));
    for (const organization of organizations) {
        const logo = profileData.getOrganizationLogo(organization);
        assert.ok(logo?.src?.startsWith("/assets/logos/"), organization);
        assert.ok(existsSync(join("public", logo.src)), `Missing logo for ${organization}`);
        assert.ok(!/^https?:/.test(logo.src), organization);
        if (logo.src.endsWith(".svg")) {
            const svg = readFileSync(join("public", logo.src), "utf8");
            assert.match(svg, /<svg\b/, organization);
            assert.doesNotMatch(svg, /<script\b|<foreignObject\b|\bon[a-z]+\s*=|(?:xlink:)?href\s*=\s*["'](?:https?:|\/\/|javascript:)/i, organization);
        }
    }
    assert.equal(profileData.getOrganizationLogo("Unknown future organization"), undefined);
    assert.equal(profileData.getOrganizationLogo("constructor"), undefined);
});

test("keeps Davidson's Floresta creator role in Projects rather than Affiliations", () => {
    const person = getPerson("davidson-souza");
    const { affiliations } = profileData.getProfileRelationships(person);
    assert.ok(!affiliations.some(({ organization }) => organization === "Floresta"));
    assert.ok(affiliations.some(({ organization, role, status }) =>
        organization === "Vinteum" && role.EN === "Grantee" && status === "current"));
    const floresta = person.projects.find(({ name }) => name === "Floresta");
    assert.equal(floresta.href, "https://github.com/getfloresta/Floresta");
    assert.match(floresta.contribution.EN, /Creator/);
    assert.match(floresta.contribution.BR, /Criador/);
});

test("links selected contributions to direct work rather than annual reports or biography articles", () => {
    for (const person of readPeople()) {
        for (const item of person.contributions) {
            assert.ok(item.href && /^https:\/\//.test(item.href), `${person.slug}: ${item.id} needs a direct public artifact`);
            const url = new URL(item.href);
            assert.ok(!/vinteum\.org$/.test(url.hostname) || !url.pathname.startsWith("/blog/"), `${person.slug}: ${item.id} links to an institutional summary`);
            assert.doesNotMatch(item.href, /Vinteum-Year-Four-Report|vinteum-3-years-report|developer-spotlight|alumni-outlook/i, `${person.slug}: ${item.id}`);
            assert.doesNotMatch(item.source ?? "", /annual report|year four report|year-four report|alumni outlook|alumni retrospective|developer spotlight/i, `${person.slug}: ${item.id} still labels a proxy source`);
            if (url.hostname === "github.com") {
                assert.ok(url.pathname.split("/").filter(Boolean).length >= 2 && !url.pathname.startsWith("/search"), `${person.slug}: ${item.id} links to a profile/search rather than work`);
                if (item.type === "Code Review") assert.match(url.pathname, /\/(pull|issues|discussions|commit)\//, `${person.slug}: ${item.id} needs the reviewed artifact`);
            }
        }
        for (const project of person.projects) {
            assert.doesNotMatch(project.href ?? "", /Vinteum-Year-Four-Report|alumni-outlook|developer-spotlight/i, `${person.slug}: ${project.name} links to a proxy rather than the project`);
        }
    }
});

test("prioritizes Bitcoin Core in Bruno's projects without treating BDL as a software project", () => {
    const bruno = getPerson("bruno-garcia");
    assert.equal(bruno.projects[0]?.name, "Bitcoin Core");
    assert.ok(!bruno.projects.some(({ name }) => name === "Bitcoin Dev Launchpad"));
    assert.equal(bruno.projects.filter(({ name }) => name === "bcore-mutation").length, 1);
    assert.ok(bruno.contributions.some(({ href }) => href.startsWith("https://github.com/bitcoin/bitcoin/pull/")));
});

test("provides local image thumbnails for Bruno's media cards", () => {
    const bruno = getPerson("bruno-garcia");
    assert.ok(bruno.media.length > 0);
    for (const item of bruno.media) {
        assert.ok(item.thumbnail?.startsWith("/assets/images/people/media/"), `${item.id} needs an image thumbnail`);
        assert.ok(existsSync(join("public", item.thumbnail)), `${item.id}: missing thumbnail file`);
    }
});

test("shows Fungi as Cindy's current project while retaining historical Payjoin pull requests", () => {
    const cindy = getPerson("bc1cindy");
    assert.equal(cindy.projects[0]?.name, "Fungi Protocol");
    assert.equal(cindy.projects[0]?.current, true);
    assert.ok(!cindy.projects.some(({ name }) => name === "Payjoin Dev Kit"));
    for (const number of [945, 962]) assert.ok(cindy.contributions.some(({ href }) => href === `https://github.com/payjoin/rust-payjoin/pull/${number}`));
    for (const name of ["lumen-fingerprints", "decluster"]) assert.ok(cindy.projects.some((project) => project.name === name));
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
