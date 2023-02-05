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

    return (
        <div style={{ position: "relative", minHeight: "75vh" }}>
            {educationNumber.map((n) => (
                <EducationForm key={n} />
            ))}
            <Flex
                style={{ bottom: "0" }}
                flexDirection="row-reverse"
                // position="absolute"
                width="100%"
                justifyContent="space-between"
            >
                <PageNavButton value="შემდეგი" />
                <Link to="/add/1">
                    <PagebackButton>უკან</PagebackButton>
                </Link>
            </Flex>
        </div>
    );
};

export default EducationPage;
