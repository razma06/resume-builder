import { useGeneralInfoStore } from "@/stores/generalInfo";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import GeneralInfoSection from "./GeneralInfoSection";
import { ResumeContainer, ResumeIcon } from "./Resume.styled";
import ResumeImage from "@/assets/images/resume.png";
import { StyledComponent, StyledComponentProps } from "styled-components";

const Resume: React.FC<{ built?: boolean }> = ({ built }) => {
    return (
        <ResumeContainer built={built}>
            <GeneralInfoSection />

            <ExperienceSection />
            <EducationSection />
            <ResumeIcon src={ResumeImage} alt="logo" />
        </ResumeContainer>
    );
};

export default Resume;
