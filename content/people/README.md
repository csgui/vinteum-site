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
  localized `location`, an optional `projectLabel` for the directory, `focus` (a list of topics), and `links` (label, URL, and
  optional icon). `updatedAt` is an optional editorial date.
- **History:** Add an item to `programs` for each program participation and to
  `affiliations` for other roles or organizations. Each item has an
  `organization` and a localized `role`. Add `status` (`current` or `past`),
  `start`, `end`, and `href` when known. Preserve the original role when a
  participation becomes past. Use quoted ISO dates at the precision supported by
  the source (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`). An affiliation can set
  `directoryRole: team` or `directoryRole: fellow` to show that role in the
  directory. The existing program pages maintain their own rosters.
- **Directory filters:** Vinteum entries with `program: fellowship` or
  `program: grants` and a status determine the directory filters. `work` is the translated project or topic label for that
  participation. `name` is the program’s display name. For Launchpad alumni
  (`bitcoin-dev-launchpad`), add `cohort` and, where published, `fundedBy`.
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

## Source and relationship checks

Technical descriptions can be enriched from Vinteum's published annual reports,
public announcements and upstream contributions. Keep useful public source links
with the text. Do not copy private reports, internal register links, assessments,
compensation or undisclosed security findings into these files.

Programme history and current affiliations are separate records. Check status and
dates against the canonical community register before marking a relationship
`current`; a historical roster or annual report does not establish current
funding. Record later employment or grants from other organizations under
`affiliations`, not as the work of a past Vinteum fellowship. BDL participation
alone does not imply a fellowship. Keep pseudonymous contributors under their
chosen public identity, and confirm permission for biographies, photos and
personal links before publication.

Keep biographies to one short paragraph per language, without links or source
attribution such as "according to the report". Put technical detail in project
summaries, selected-contribution descriptions, publications and programme history.
Keep the supporting public link with the relevant entry instead of in the bio.

Fellowships and grants remain in `programs` as the single source used by directory
filters. The profile renders them as **Affiliations**, using their Fellow or
Grantee role, status, dates, work and description. Other programme participation,
such as the Bitcoin Dev Launchpad, stays under **Community & programs**. Do not
create duplicate fellowship/grant rows in `affiliations` just for display.

Grants and fellowships from other organizations also belong in `affiliations`,
with their own role, status and period. Keep concurrent funding relationships
separate: a current external grant does not erase a past Vinteum fellowship or
imply that another grant has ended. Check the external-affiliation register as
well as the programme rosters when updating a profile.

## Initial profiles

The Fellowship and Grants rosters provide the initial names, photos, program
status and work labels. The Launchpad alumni roster supplies the cohort and
funding context on that page. The supplied prototype also provides four additional people and enriches the
roster profiles with biographies, links, projects and published activity. Update
these fields when the upstream information changes and leave unpublished dates
and affiliations out.
