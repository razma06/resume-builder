import { Flex } from "@/components/library/Flex.styled";
import { FormContainer } from "@/components/shared/formContainer/FormContainer.styled";
import Header from "@/components/shared/header/Header";
import Resume from "@/components/shared/resume/Resume";
import GeneralInfoForm from "@/pages/generalInfoPage/GeneralInfoForm";
import { Route, Routes, useLocation } from "react-router-dom";
import EducationPage from "../educationPage/EducationPage";
import ExperiencePage from "../experiencePage/ExperiencePage";
import { AnimatePresence } from "framer-motion";

const Add = () => {
    const location = useLocation();
    return (
        <Flex width="100%" justifyContent="space-between">
            <FormContainer>
                <Header />
                <AnimatePresence>
                    <Routes>
                        <Route path="/" element={<GeneralInfoForm />} />
                        <Route path="/1" element={<GeneralInfoForm />} />
                        <Route path="/2" element={<ExperiencePage />} />
                        <Route path="/3" element={<EducationPage />} />
                    </Routes>
                </AnimatePresence>
            </FormContainer>
            <Resume />
        </Flex>
    );
};

export default Add;
