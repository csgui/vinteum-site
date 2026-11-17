# Contributor profiles

Create a Markdown file here for each person. Its filename becomes the public URL
(for example, `first-last.md` becomes `/people/first-last`). Keep the filename
stable after publication. Use a single file per person even when a handle or
program changes. The directory, profile routes and sitemap are generated at build
time.

```yaml
---
name: Full name
image: /assets/images/people/portrait.jpg
links:
  - label: GitHub
    icon: github
    href: https://github.com/handle
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role: { EN: Fellow, BR: Fellow }
    status: current
    href: /programs/fellowship
    work: { EN: Published project or topic, BR: Projeto ou tema publicado }
---
## EN

Public biography in English.

## PT

Biografia pública em português.
```

Only `name` is required. Add known information and omit unavailable fields and
sections. Biography headings are optional. A single biography is shown in both
languages if a translation is unavailable. Localized frontmatter uses `EN` and
`BR`. Images and media thumbnails use a path relative to `public/`, starting
with `/`. The directory uses initials when a portrait is unavailable.

- **Identity:** `name`, `image`, `handle` (without @), `pseudonymous`,
  localized `location`, `focus` (a list of topics), and `links` (label, URL, and
  optional icon). `updatedAt` is an optional editorial date.
- **History:** Add an item to `programs` for each program participation and to
  `affiliations` for other roles or organizations. Each item has an
  `organization` and a localized `role`. Add `status` (`current` or `past`),
  `start`, `end`, and `href` when known. Preserve the original role when a
  participation becomes past. Use quoted ISO dates at the precision supported by
  the source (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`).
- **Program cards:** Vinteum entries with `program: fellowship` or
  `program: grants` and a status feed the existing program listings and the
  directory filters. `work` is the translated project or topic label for that
  participation. `name` is the program’s display name. For Launchpad alumni
  (`bitcoin-dev-launchpad`), add `cohort` and, where published, `fundedBy`.
  Every card links to the same canonical profile.
- **Projects:** Each `projects` item has a `name` and optional `href`,
  localized `description` and `contribution`, and a boolean `current`.
- **Activity:** `contributions`, `discussions`, `writing` and `media` use unique
  item IDs within each list, localized `title`, and optional `href`, `source`,
  `date`, localized `description`, and `featured`. Contributions specify a
  `type` such as `PR`, `Code Review`, `Research`, `Tooling`, `Documentation`
  or `Protocol Specification`. Use `writing` for publications and `media`
  for talks, interviews and podcasts. Media accepts `mediaType` (`video` or
  `article`) and `thumbnail`.
- **Connections:** An optional `connections` entry uses another published
  profile's `slug` and a localized `reason`.

Run `pnpm test:people` (Node 22.13 or newer) and `pnpm build` before review. To
check rendered routes, start the production build with `pnpm start` and run
`PEOPLE_TEST_URL=http://localhost:3000 pnpm test:people`.

## Initial profiles

The Fellowship and Grants rosters provide the initial names, photos, program
status and work labels. The Launchpad alumni roster supplies the cohort and
funding context on that page. Where the supplied prototype matched a roster
identity, its sourced projects, bios and activity were brought across. Update
these fields when the upstream information changes and leave unpublished dates
and affiliations out.
