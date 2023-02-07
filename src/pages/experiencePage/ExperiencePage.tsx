import { Button } from "@/components/library/Button";
import { Flex } from "@/components/library/Flex.styled";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import { PageNavButtonStyled } from "@/components/shared/pageNavButton/PageNavButton.styled";
import { useExperienceStore } from "@/stores/experience";
import React, { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExperienceForm from "./ExperienceForm";

const ExperiencePage = () => {
    const addExperience = useExperienceStore((state) => state.addExperience);
    const experience = useExperienceStore((state) => state.experience);
    const [experienceNumber, setExperienceNumber] = useState<number[]>([
        ...Array(experience.length).keys(),
    ]);
    const [forms, setForms] = useState<
        React.MutableRefObject<HTMLFormElement>[]
    >(
        new Array(experience.length).fill(
            useRef() as React.MutableRefObject<HTMLFormElement>
        )
    );

    const nav = useNavigate();

    const addClickHandler = () => {
        addExperience();
        setForms([
            ...forms,
            React.createRef() as React.MutableRefObject<HTMLFormElement>,
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

        // if (experience.every((exp) => exp.isValid == true)) {
        //     nav("/add/3");
        // }
    };

    return (
        <div style={{ position: "relative", minHeight: "75vh" }}>
            {experienceNumber.map((n) => (
                <ExperienceForm ref={forms[n]} key={n} n={n} />
            ))}
            <Button onClick={addClickHandler}>
                მეტი გამოცდილების დამატება
            </Button>
            <Flex
                style={{ bottom: "0" }}
                flexDirection="row-reverse"
                // position="absolute"
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
