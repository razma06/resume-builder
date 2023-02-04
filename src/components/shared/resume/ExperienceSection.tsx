import { useExperienceStore } from "@/stores/experience";
import React from "react";

const ExperienceSection = () => {
    const experience = useExperienceStore((state) => state.experience);
    const { position, employer, startDate, endDate, description } =
        experience[0];

    return (
        <section>
            <h3 className="small-title">{position}</h3>
            
        </section>
    );
};

export default ExperienceSection;
