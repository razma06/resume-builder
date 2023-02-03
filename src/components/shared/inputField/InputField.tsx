import GeneralInfoForm from "@/pages/generalInfoForm/GeneralInfoForm";
import React from "react";
import {
    Input,
    InputFieldContainer,
    InputFieldHint,
    InputFieldLabel,
} from "./InputField.styled";

interface InputFieldProps {
    label: string;
    placeholder: string;
    hint?: string;
    type: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    hint,
    type,
}) => {
    return (
        <InputFieldContainer>
            <InputFieldLabel>{label}</InputFieldLabel>
            <Input placeholder={placeholder} type={type} />
            <InputFieldHint>{hint}</InputFieldHint>
        </InputFieldContainer>
    );
};

export default InputField;
