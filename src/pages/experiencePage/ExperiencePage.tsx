import { Button } from "@/components/library/Button";
import { Flex } from "@/components/library/Flex.styled";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import { useExperienceStore } from "@/stores/experience";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExperienceForm from "./ExperienceForm";

const ExperiencePage = () => {
    const addExperience = useExperienceStore((state) => state.addExperience);
    const experience = useExperienceStore((state) => state.experience);
    const [experienceNumber, setExperienceNumber] = useState<number[]>([
        ...Array(experience.length).keys(),
    ]);

    const clickHandler = () => {
        addExperience();
        setExperienceNumber([...experienceNumber, experienceNumber.length]);
    };

    return (
        <div style={{ position: "relative", minHeight: "75vh" }}>
            {experienceNumber.map((n) => (
                <ExperienceForm key={n} n={n} />
            ))}
            <Button onClick={clickHandler}>მეტი გამოცდილების დამატება</Button>
            <Flex
                style={{ bottom: "0" }}
                flexDirection="row-reverse"
                position="absolute"
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

export default ExperiencePage;
