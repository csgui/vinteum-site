"use client";

import { useState, useEffect, startTransition } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TeamMemberCard } from "../shared/TeamMemberCard";
import type { ProgramMember } from "../shared/AlumniCarouselSection";
import { SectionTitle } from "../shared/SectionTitle";

function shuffled<T>(arr: T[]): T[] {
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}

function CohortGrid({ members }: { members: ProgramMember[] }) {
    const { locale } = useLanguage();
    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {members.map((m) => (
                <div
                    key={m.slug}
                    className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.667px)] lg:w-[calc(25%-18px)]"
                >
                    <TeamMemberCard
                        image={m.image}
                        name={m.name}
                        role={m.work?.[locale]}
                        profileHref={`/people/${m.slug}`}
                        fundedBy={m.fundedBy}
                        links={m.links}
                        easterEggImage={m.easterEggImage}
                    />
                </div>
            ))}
        </div>
    );
}

export function LaunchpadAlumniSection({ cohort1, cohort2 }: { cohort1: ProgramMember[]; cohort2: ProgramMember[] }) {
    const { t } = useLanguage();
    const [first, setFirst] = useState(cohort1);
    const [second, setSecond] = useState(cohort2);

    useEffect(() => {
        startTransition(() => {
            setFirst(shuffled(cohort1));
            setSecond(shuffled(cohort2));
        });
    }, [cohort1, cohort2]);

    return (
        <section className="relative w-full py-10 md:py-24 lg:py-28">
            <div className="max-w-7xl mx-auto px-8 md:px-14 lg:px-20">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <SectionTitle>{t("launchpad.alumni.title")}</SectionTitle>
                </div>

                <p className="font-space-mono text-sm text-foreground/50 uppercase tracking-widest mb-8">
                    {t("launchpad.alumni.cohort1")}
                </p>
                <CohortGrid members={first} />

                <p className="font-space-mono text-sm text-foreground/50 uppercase tracking-widest mt-16 mb-8">
                    {t("launchpad.alumni.cohort2")}
                </p>
                <CohortGrid members={second} />
            </div>
        </section>
    );
}
