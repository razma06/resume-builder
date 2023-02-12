import { useEducationStore } from "@/stores/education";
import React from "react";
import Description from "../descriptionContainer/DescriptionContainer";
import { BreakingLine } from "./Resume.styled";

const EducationSection = () => {
    const education = useEducationStore((state) => state.education);
    const degree = useEducationStore((state) => state.degree);

    console.log(education[0]);
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
                        wantLine={!!education.institute}
                        wantTitle={i === 0}
                        descriptionText={education.description}
                        detailTitle={
                            education.institute
                                ? education.institute +
                                      ", " +
                                      degree.data.find(
                                          (val) =>
                                              val.id === education.degree_id
                                      )?.title || education.degree
                                : degree.data.find(
                                      (val) => val.id === education.degree_id
                                  )?.title || education.degree
                        }
                        endDate={education.due_date}
                    />
                );
            })}
        </section>
    );
};

export default EducationSection;
