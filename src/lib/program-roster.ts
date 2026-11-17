import type { ProgramMember } from "@/app/components/shared/AlumniCarouselSection";
import { getPeople } from "./people";

export function getProgramRoster(program: string, cohort?: number): ProgramMember[] {
    return getPeople().flatMap((person) =>
        person.programs.filter((entry) =>
            entry.organization === "Vinteum" && entry.program === program &&
            (cohort === undefined || entry.cohort === cohort),
        ).map((entry) => ({
            slug: person.slug,
            name: person.name,
            work: entry.work,
            image: person.image ?? "",
            status: entry.status,
            fundedBy: entry.fundedBy,
            // Profile links may contain multiple accounts. Program cards use the first per icon.
            links: Object.fromEntries(
                [...person.links].reverse().filter(({ icon }) => icon).map(({ icon, href }) => [icon, href]),
            ),
            easterEggImage: person.alternateImage,
        })),
    );
}
