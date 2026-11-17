"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjectLabel, type Person } from "@/data/people";
import { PersonAvatar } from "./PeoplePrimitives";
import styles from "./people.module.css";

const width = 1080;
const columns = 5;
const cellWidth = width / columns;

export function ProjectMap({ people }: { people: Person[] }) {
    const { locale, t } = useLanguage();
    const [activeGroup, setActiveGroup] = useState<string>();
    const groups = new Map<string, { title: string; people: Person[] }>();
    for (const person of people) {
        const title = getProjectLabel(person, locale) ?? t("people.otherWork");
        const key = title.toLowerCase();
        const group = groups.get(key);
        if (group) group.people.push(person);
        else groups.set(key, { title, people: [person] });
    }

    const entries = [...groups].sort(([, a], [, b]) => b.people.length - a.people.length);
    const cells = [];
    let height = 28;
    for (let row = 0; row < entries.length; row += columns) {
        const band = entries.slice(row, row + columns);
        for (const [column, [key, group]] of band.entries()) {
            const x = (column + 0.5) * cellWidth;
            const y = height + 32 + (column % 2) * 22;
            cells.push({
                key, title: group.title, x, y,
                people: group.people.map((person, index) => ({
                    person,
                    x: x + (index % 2 ? 47 : -47),
                    y: y + 78 + Math.floor(index / 2) * 68 + (index % 2) * 10,
                })),
            });
        }
        height += 144 + Math.ceil(Math.max(...band.map(([, group]) => group.people.length)) / 2) * 68;
    }

    return (
        <section className={styles.map} aria-label={t("people.map")}>
            <div className={styles.mapScroll} tabIndex={0} aria-label={t("people.mapScroll")}>
                <div className={styles.mapCanvas} style={{ width, height }}>
                    <svg className={styles.mapEdges} width={width} height={height} aria-hidden="true">
                        {cells.flatMap((cell) => cell.people.map(({ person, x, y }) => (
                            <line key={person.slug} x1={cell.x} y1={cell.y} x2={x} y2={y}
                                data-active={activeGroup === cell.key} />
                        )))}
                    </svg>
                    <ul className={styles.mapGroups}>
                        {cells.map((cell) => (
                            <li key={cell.key} onMouseEnter={() => setActiveGroup(cell.key)}
                                onMouseLeave={() => setActiveGroup(undefined)}
                                onFocus={() => setActiveGroup(cell.key)}
                                onBlur={(event) => {
                                    if (!event.currentTarget.contains(event.relatedTarget)) setActiveGroup(undefined);
                                }}>
                                <h2 className={styles.mapProject} style={{ left: cell.x, top: cell.y }}>
                                    {cell.title}
                                </h2>
                                <ul>
                                    {cell.people.map(({ person, x, y }) => (
                                        <li key={person.slug}>
                                            <Link href={`/people/${person.slug}`} className={styles.mapPerson}
                                                style={{ left: x, top: y }}>
                                                <PersonAvatar person={person} />
                                                <span>{person.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className={styles.mapLegend}>
                <span>{t("people.directory")}</span>
                <span>{t("people.tabs.projects")}</span>
            </p>
        </section>
    );
}
