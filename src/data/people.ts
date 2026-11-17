// Shared profile types and formatting. Profile content lives in content/people/*.md.
export type LocalizedText = { EN: string; BR: string };
export const text = (EN: string, BR: string): LocalizedText => ({ EN, BR });
export type DirectoryRole = "grantee" | "fellow" | "alumni" | "team";
export type ParticipationStatus = "current" | "past";

export interface Affiliation {
    organization: string;
    role: LocalizedText;
    directoryRole?: "team" | "fellow";
    status?: ParticipationStatus;
    start?: string;
    end?: string;
    href?: string;
}

export interface Participation extends Affiliation {
    program: string;
    name: string;
    cohort?: number;
    fundedBy?: string;
    work?: LocalizedText;
    description?: LocalizedText;
}
export type ContributionType = "PR" | "Code Review" | "Research" | "Tooling" | "Documentation" | "Protocol Specification";

export interface ProfileItem {
    id: string;
    title: LocalizedText;
    date?: string; // Optional ISO year-month or date.
    source?: string;
    featured?: boolean;
    thumbnail?: string;
    mediaType?: "video" | "article";
    type?: string;
    description?: LocalizedText;
    href?: string;
}

export interface PersonProject {
    name: string;
    href?: string;
    description?: LocalizedText;
    contribution?: LocalizedText;
    current?: boolean;
}

export interface Person {
    slug: string;
    name: string;
    handle?: string;
    image?: string;
    alternateImage?: string;
    pseudonymous?: boolean;
    location?: LocalizedText;
    bio?: LocalizedText;
    focus: string[];
    projectLabel?: string;
    updatedAt?: string;
    links: {
        label: string;
        href: string;
        icon?: "github" | "twitter" | "nostr" | "website" | "blog" | "youtube" | "linkedin" | "discord" | "instagram" | "keybase" | "email" | "scholar";
    }[];
    affiliations: Affiliation[];
    programs: Participation[];
    projects: PersonProject[];
    contributions: (ProfileItem & { type: ContributionType })[];
    discussions: ProfileItem[];
    writing: ProfileItem[];
    media: ProfileItem[];
    connections: { slug: string; reason: LocalizedText }[];
}

export function getDirectoryRole(person: Person): DirectoryRole | undefined {
    const primary = getPrimaryParticipation(person);
    if (primary?.status === "past") return "alumni";
    if (primary?.status === "current") return primary.program === "grants" ? "grantee" : "fellow";
    return person.affiliations.find(({ directoryRole }) => directoryRole)?.directoryRole;
}

export function getPrimaryParticipation(person: Person): Participation | undefined {
    return person.programs.find(({ organization, program, status }) =>
        organization === "Vinteum" && program === "grants" && status === "current",
    ) ?? person.programs.find(({ organization, program, status }) =>
        organization === "Vinteum" && program === "fellowship" && status === "current",
    ) ?? person.programs.find(({ organization, program }) =>
        organization === "Vinteum" && (program === "grants" || program === "fellowship"),
    ) ?? person.programs.find(({ organization, program }) =>
        organization === "Vinteum" && program === "bitcoin-dev-launchpad",
    );
}

export function getProfileRelationships(person: Person): {
    affiliations: (Affiliation & { work?: LocalizedText; description?: LocalizedText })[];
    programs: Participation[];
} {
    const isAffiliation = ({ program }: Participation) => program === "grants" || program === "fellowship";
    return {
        affiliations: [...person.affiliations, ...person.programs.filter(isAffiliation)],
        programs: person.programs.filter((entry) => !isAffiliation(entry)),
    };
}

export function getProjectLabel(person: Person, locale: "EN" | "BR") {
    return getPrimaryParticipation(person)?.work?.[locale] ?? person.projectLabel ?? person.projects[0]?.name
        ?? person.affiliations.find(({ directoryRole }) => directoryRole === "team")?.role[locale];
}

export function formatPersonDate(date: string, locale: "EN" | "BR", full = false): string {
    if (date.length === 4) return date;
    return new Intl.DateTimeFormat(locale === "BR" ? "pt-BR" : "en-US", {
        month: "short",
        ...(full ? { day: "numeric" as const } : {}),
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date.length === 7 ? `${date}-01` : date}T12:00:00Z`));
}

export function sortProfileItems(items: ProfileItem[]): ProfileItem[] {
    return [...items].sort((a, b) =>
        Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
        (b.date ?? "").localeCompare(a.date ?? ""),
    );
}

function normalizeSearch(value: string) {
    return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export function filterPeople(
    people: Person[],
    { role, focus, query, locale }: {
        role: DirectoryRole | "all";
        focus: string;
        query: string;
        locale: "EN" | "BR";
    },
) {
    const search = normalizeSearch(query.trim());
    return people.filter((person) =>
        (role === "all" || getDirectoryRole(person) === role) &&
        (!focus || person.focus.includes(focus)) &&
        (!search || normalizeSearch([
            person.name,
            person.handle,
            getProjectLabel(person, locale),
            person.bio?.[locale],
            ...person.focus,
            ...person.programs.map(({ work }) => work?.[locale]),
            ...person.projects.map(({ name }) => name),
        ].join(" ")).includes(search)),
    );
}
