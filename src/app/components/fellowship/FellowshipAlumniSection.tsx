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

export function FellowshipAlumniSection({ members }: { members: ProgramMember[] }) {
    const [orderedMembers, setOrderedMembers] = useState(members);

    useEffect(() => {
        startTransition(() => setOrderedMembers(shuffled(members)));
    }, [members]);

    return (
        <AlumniCarouselSection
            titleKey="fellowship.fellows.title"
            members={orderedMembers}
            showFilter={true}
            filterCurrentKey="fellowship.fellows.filterCurrent"
            filterPastKey="fellowship.fellows.filterPast"
            initialFilter="current"
            showMoreKey="fellowship.fellows.showMore"
            showLessKey="fellowship.fellows.showLess"
        />
    );
}
