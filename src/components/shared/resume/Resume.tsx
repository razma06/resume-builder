import { useGeneralInfoStore } from "@/stores/generalInfo";
import ExperienceSection from "./ExperienceSection";
import GeneralInfoSection from "./GeneralInfoSection";
import { ResumeContainer } from "./Resume.styled";

const Resume = () => {
    return (
        <ResumeContainer>
            <GeneralInfoSection />
            <ExperienceSection />
        </ResumeContainer>
    );
};

export default Resume;
