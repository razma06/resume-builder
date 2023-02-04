import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import {
    InputFieldContainer,
    InputFieldHint,
    InputFieldLabel,
    TextArea,
} from "./InputField.styled";

interface InputTextFieldProps {
    label: string;
    placeholder: string;
    hint?: string;
    isError?: boolean;
    isSuccess?: boolean;
    register: UseFormRegisterReturn<string>;
    rows: number;
    cols: number;
    value?: any;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
    label,
    placeholder,
    hint,
    isError,
    isSuccess,
    register,
    rows,
    cols,
    value,
}) => {
    return (
        <InputFieldContainer isError={isError} isSuccess={isSuccess}>
            <InputFieldLabel>{label}</InputFieldLabel>
            <TextArea
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                {...register}
                value={value}
            />
            {hint ? <InputFieldHint>{hint}</InputFieldHint> : null}
        </InputFieldContainer>
    );
};

export default InputTextField;
