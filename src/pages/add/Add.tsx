import { Flex } from "@/components/library/Flex.styled";
import { FormContainer } from "@/components/shared/formContainer/FormContainer.styled";
import Header from "@/components/shared/header/Header";
import InputField from "@/components/shared/inputField/InputField";
import React from "react";
import GeneralInfoForm from "@/pages/generalInfoForm/GeneralInfoForm";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";

const Add = () => {
    return (
        <Flex width="100%" height="100vh">
            <FormContainer>
                <Header stepName="პირადი ინფო" stepNumber="1/3" />
                <GeneralInfoForm />
                <PageNavButton>შემდეგი</PageNavButton>
            </FormContainer>
        </Flex>
    );
};

export default Add;
