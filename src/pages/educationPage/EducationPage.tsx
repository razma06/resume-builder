import { Button } from "@/components/library/Button";
import { Flex } from "@/components/library/Flex.styled";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import { PageNavButtonStyled } from "@/components/shared/pageNavButton/PageNavButton.styled";
import { useEducationStore } from "@/stores/education";
import { useExperienceStore } from "@/stores/experience";
import { useGeneralInfoStore } from "@/stores/generalInfo";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EducationForm from "./EducationForm";

const EducationPage = () => {
    const getDegreesData = useEducationStore((state) => state.getDegreesData);
    const degreeData = useEducationStore((state) => state.degree);
    const addEducation = useEducationStore((state) => state.addEducation);
    const education = useEducationStore((state) => state.education);
    const generalInfoIsValid = useGeneralInfoStore((state) => state.isValid);
    const experienceIsValid = useExperienceStore((state) => state.isValid);
    const [educationNumber, setEducationNumber] = useState<number[]>([
        ...Array(education.length).keys(),
    ]);
    const [forms, setForms] = useState<
        React.MutableRefObject<HTMLFormElement>[]
    >(
        new Array(education.length).fill(
            useRef() as React.MutableRefObject<HTMLFormElement>
        )
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (!degreeData.data.length) {
            getDegreesData();
        }
        if (!generalInfoIsValid) {
            navigate("/add/1");
        }
        if (!experienceIsValid.every((val) => val === true)) {
            navigate("/add/2");
        }
    }, []);

    const addClickHandler = () => {
        addEducation();
        setForms([
            ...forms,
            React.createRef() as React.MutableRefObject<HTMLFormElement>,
        ]);
        setEducationNumber([...educationNumber, educationNumber.length]);
    };

    const clickHandler = () => {
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
                {educationNumber.map((n) => (
                    <EducationForm ref={forms[n]} n={n} key={n} />
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
                // position="absolute"
                width="100%"
                justifyContent="space-between"
            >
                <PageNavButtonStyled onClick={clickHandler}>
                    რეზიუმეს შექმნა
                </PageNavButtonStyled>
                <Link to="/add/2">
                    <PagebackButton>უკან</PagebackButton>
                </Link>
            </Flex>
        </div>
    );
};

export default EducationPage;
