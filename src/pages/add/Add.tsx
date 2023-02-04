import { Flex } from "@/components/library/Flex.styled";
import { FormContainer } from "@/components/shared/formContainer/FormContainer.styled";
import Header from "@/components/shared/header/Header";
import Resume from "@/components/shared/resume/Resume";
import GeneralInfoForm from "@/pages/generalInfoForm/GeneralInfoForm";
import { Route, Router, Routes } from "react-router-dom";
import ExperienceForm from "../experiencePage/ExperienceForm";

const Add = () => {
    return (
        <Flex width="100%" height="100vh">
            <FormContainer>
                <Header stepName="პირადი ინფო" stepNumber="1/3" />
                <Routes>
                    <Route path="/" element={<GeneralInfoForm />} />
                    <Route path="/1" element={<GeneralInfoForm />} />
                    <Route path="/2" element={<ExperienceForm />} />
                </Routes>
            </FormContainer>
            <Resume />
        </Flex>
    );
};

export default Add;
