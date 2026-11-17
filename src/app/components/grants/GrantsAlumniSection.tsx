"use client";

import { useState, useEffect, startTransition } from "react";
import { AlumniCarouselSection, type ProgramMember } from "../shared/AlumniCarouselSection";

function shuffled<T>(arr: T[]): T[] {
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}

export function GrantsAlumniSection({ members }: { members: ProgramMember[] }) {
    const [orderedMembers, setOrderedMembers] = useState(members);

    useEffect(() => {
        startTransition(() => setOrderedMembers(shuffled(members)));
    }, [members]);

    return (
        <div className="relative z-[1]">
            <AlumniCarouselSection
                titleKey="grants.grantees.title"
                members={orderedMembers}
                showFilter={true}
                filterCurrentKey="grants.grantees.filterCurrent"
                filterPastKey="grants.grantees.filterPast"
                initialFilter="current"
                showMoreKey="grants.grantees.showMore"
                showLessKey="grants.grantees.showLess"
            />
        </div>
    );
}
