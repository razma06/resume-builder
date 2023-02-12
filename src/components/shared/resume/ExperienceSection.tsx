import { useExperienceStore } from "@/stores/experience";
import React, { useEffect, useState } from "react";
import Description from "../descriptionContainer/DescriptionContainer";
import { BreakingLine } from "./Resume.styled";

const ExperienceSection = () => {
    const experience = useExperienceStore((state) => state.experience);
    useEffect(() => {}, [experience]);

    return (
        <section>
            {experience.map((e, i) => {
                return (
                    <Description
                        key={i}
                        title="გამოცდილება"
                        wantLine={!!e.employer}
                        wantTitle={i === 0}
                        descriptionText={e.description}
                        detailTitle={
                            e.employer
                                ? e.position + ", " + e.employer
                                : e.position
                        }
                        endDate={e.due_date}
                        stratDate={e.start_date}
                    />
                );
            })}
        </section>
    );
};

export default ExperienceSection;
