import { Button } from "@/components/library/Button";
import { Flex } from "@/components/library/Flex.styled";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import { useEducationStore } from "@/stores/education";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import EducationForm from "./EducationForm";

const EducationPage = () => {
    const addEducation = useEducationStore((state) => state.addEducation);
    const education = useEducationStore((state) => state.education);
    const [educationNumber, setEducationNumber] = useState<number[]>([
        ...Array(education.length).keys(),
    ]);
    const addClickHandler = () => {
        addEducation();
        setEducationNumber([...educationNumber, educationNumber.length]);
    };

    return (
        <div style={{ position: "relative", minHeight: "75vh" }}>
            {educationNumber.map((n) => (
                <EducationForm n={n} key={n} />
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
                <PageNavButton value="შემდეგი" />
                <Link to="/add/2">
                    <PagebackButton>უკან</PagebackButton>
                </Link>
            </Flex>
        </div>
    );
};

export default EducationPage;
