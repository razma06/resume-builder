import { useExperienceStore } from "@/stores/experience";
import React, { useEffect, useState } from "react";
import Description from "../descriptionContainer/DescriptionContainer";
import { BreakingLine } from "./Resume.styled";

const ExperienceSection = () => {
    const experience = useExperienceStore((state) => state.experience);
    useEffect(() => {}, [experience]);

    return (
        <section>
            {experience.length === 0 && (
                <>
                    <BreakingLine />
                    <h3 className="small-title">გამოცდილება</h3>
                </>
            )}
            {experience.map((e, i) => {
                return (
                    <Description
                        key={i}
                        title="გამოცდილება"
                        wantLine={true}
                        wantTitle={i === 0}
                        descriptionText={e.data.description}
                        detailTitle={
                            e.data.employer
                                ? e.data.position + ", " + e.data.employer
                                : e.data.position
                        }
                        endDate={e.data.endDate}
                        stratDate={e.data.startDate}
                    />
                );
            })}
        </section>
    );
};

export default ExperienceSection;
