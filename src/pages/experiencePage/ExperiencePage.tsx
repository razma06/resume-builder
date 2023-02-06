import { Button } from "@/components/library/Button";
import { Flex } from "@/components/library/Flex.styled";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import { PageNavButtonStyled } from "@/components/shared/pageNavButton/PageNavButton.styled";
import { useExperienceStore } from "@/stores/experience";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExperienceForm from "./ExperienceForm";

const ExperiencePage = () => {
    const addExperience = useExperienceStore((state) => state.addExperience);
    const experience = useExperienceStore((state) => state.experience);
    const [experienceNumber, setExperienceNumber] = useState<number[]>([
        ...Array(experience.length).keys(),
    ]);
    const nav = useNavigate();

    const addClickHandler = () => {
        addExperience();
        setExperienceNumber([...experienceNumber, experienceNumber.length]);
    };

    const nextClickHandler = () => {
        document.querySelectorAll("form").forEach((form) => {
            form.dispatchEvent(new Event("submit"));
        });

        if (experience.every((exp) => exp.isValid == true)) {
            nav("/add/3");
        }
    };

    return (
        <div style={{ position: "relative", minHeight: "75vh" }}>
            {experienceNumber.map((n) => (
                <ExperienceForm key={n} n={n} />
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
