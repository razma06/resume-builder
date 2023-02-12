import { Button } from "@/components/library/Button";
import { Flex } from "@/components/library/Flex.styled";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import { PageNavButtonStyled } from "@/components/shared/pageNavButton/PageNavButton.styled";
import { BreakingLine } from "@/components/shared/resume/Resume.styled";
import { useExperienceStore } from "@/stores/experience";
import { useGeneralInfoStore } from "@/stores/generalInfo";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExperienceForm from "./ExperienceForm";

const ExperiencePage = () => {
    const addExperience = useExperienceStore((state) => state.addExperience);
    const experience = useExperienceStore((state) => state.experience);
    const generalInfoIsValid = useGeneralInfoStore((state) => state.isValid);
    const [experienceNumber, setExperienceNumber] = useState<number[]>([
        ...Array(experience.length).keys(),
    ]);
    const [forms, setForms] = useState<
        React.MutableRefObject<HTMLFormElement>[]
    >(
        Array.from(
            { length: experience.length },
            (_, i) =>
                React.createRef() as React.MutableRefObject<HTMLFormElement>
        )
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (!generalInfoIsValid) {
            navigate("/add/1");
        }
    }, []);

    const addClickHandler = () => {
        addExperience();
        setForms([
            React.createRef() as React.MutableRefObject<HTMLFormElement>,
            ...forms,
        ]);

        setExperienceNumber([...experienceNumber, experienceNumber.length]);
    };
    const nextClickHandler = () => {
        forms.forEach((form) => {
            const event = new Event("submit", {
                cancelable: true,
                bubbles: true,
            });
            form.current.dispatchEvent(event);
        });
    };

    return (
        <div
            style={{
                position: "relative",
                minHeight: "75vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <div>
                {experienceNumber.map((n) => (
                    <React.Fragment key={n}>
                        <ExperienceForm
                            ref={forms[forms.length - 1 - n]}
                            n={n}
                        />
                        <BreakingLine />
                    </React.Fragment>
                ))}
                <Button
                    style={{ marginBottom: "50px" }}
                    onClick={addClickHandler}
                >
                    მეტი გამოცდილების დამატება
                </Button>
            </div>
            <Flex
                style={{ bottom: "0" }}
                flexDirection="row-reverse"
                width="100%"
                justifyContent="space-between"
            >
                <PageNavButtonStyled onClick={nextClickHandler}>
                    შემდეგი
                </PageNavButtonStyled>
                <Link to="/add/1">
                    <PagebackButton>უკან</PagebackButton>
                </Link>
            </Flex>
        </div>
    );
};

export default ExperiencePage;
