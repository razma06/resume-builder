import { Flex } from "@/components/library/Flex.styled";
import { FormContainer } from "@/components/shared/formContainer/FormContainer.styled";
import Header from "@/components/shared/header/Header";
import Resume from "@/components/shared/resume/Resume";
import GeneralInfoForm from "@/pages/generalInfoPage/GeneralInfoForm";
import { Route, Router, Routes } from "react-router-dom";
import EducationPage from "../educationPage/EducationPage";
import ExperienceForm from "../experiencePage/ExperienceForm";
import ExperiencePage from "../experiencePage/ExperiencePage";

const Add = () => {
    return (
        <Flex width="100%" height="100vh" justifyContent="space-between">
            <FormContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<GeneralInfoForm />} />
                    <Route path="/1" element={<GeneralInfoForm />} />
                    <Route path="/2" element={<ExperiencePage />} />
                    <Route path="/3" element={<EducationPage />} />
                </Routes>
            </FormContainer>
            <Resume />
        </Flex>
    );
};

export default Add;
