import GeneralInfoForm from "@/pages/generalInfoForm/GeneralInfoForm";
import React from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import {
    Input,
    InputFieldContainer,
    InputFieldHint,
    InputFieldLabel,
} from "./InputField.styled";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type: string;
    hint?: string;
    isError?: boolean;
    isSuccess?: boolean;
    value?: any;
    register: UseFormRegisterReturn<string>;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    hint,
    type,
    isError,
    isSuccess,
    register,
    value,
}) => {
    return (
        <InputFieldContainer isError={isError} isSuccess={isSuccess}>
            <InputFieldLabel>{label}</InputFieldLabel>
            <Input
                value={value}
                placeholder={placeholder}
                type={type}
                {...register}
            />
            <InputFieldHint>{hint}</InputFieldHint>
        </InputFieldContainer>
    );
};

export default InputField;
