import { useExperienceStore } from "@/stores/experience";
import React, { useEffect, useState } from "react";
import { BreakingLine } from "./Resume.styled";

const ExperienceSection = () => {
    const experience = useExperienceStore((state) => state.experience);
    useEffect(() => {
        console.log(experience);
    }, [experience]);

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
                    <div key={i}>
                        {i > 0 && <BreakingLine />}
                        <article>
                            <span>{e.position}</span>
                            {e.employer && <span>, {e.employer}</span>}
                        </article>
                        <article>
                            <span>{e.startDate}</span>
                            <span>{e.endDate}</span>
                        </article>
                        <p className="description">{e.description}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default ExperienceSection;
