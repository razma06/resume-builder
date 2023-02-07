import { useEducationStore } from "@/stores/education";
import React from "react";
import Description from "../descriptionContainer/DescriptionContainer";
import { BreakingLine } from "./Resume.styled";

const EducationSection = () => {
    const education = useEducationStore((state) => state.education);

    return (
        <section>
            {education.length === 0 && (
                <>
                    <BreakingLine />
                    <h3 className="small-title">განათლება</h3>
                </>
            )}
            {education.map((education, i) => {
                return (
                    <Description
                        key={i}
                        title="განათლება"
                        wantLine={true}
                        wantTitle={i === 0}
                        descriptionText={education.data.description}
                        detailTitle={
                            education.data.institute
                                ? education.data.institute +
                                  ", " +
                                  education.data.degree.title
                                : education.data.degree.title
                        }
                        endDate={education.data.due_date}
                    />
                );
            })}
        </section>
    );
};

export default EducationSection;
