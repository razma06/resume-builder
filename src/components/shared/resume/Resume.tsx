import { useGeneralInfoStore } from "@/stores/generalInfo";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import GeneralInfoSection from "./GeneralInfoSection";
import { BreakingLine, ResumeContainer } from "./Resume.styled";

const Resume = () => {
    return (
        <ResumeContainer>
            <GeneralInfoSection />

            <ExperienceSection />
            <EducationSection />
        </ResumeContainer>
    );
};

export default Resume;
