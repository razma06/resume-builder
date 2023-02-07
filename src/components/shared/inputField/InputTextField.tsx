import React from "react";
import {
    Control,
    Controller,
    FieldValues,
    UseFormRegisterReturn,
} from "react-hook-form";
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
    name: string;
    control: Control<FieldValues>;
    setValue: (...args: any) => void;
    validation: any;
    rows: number;
    cols: number;
    value?: any;
    n?: number;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
    label,
    placeholder,
    hint,
    control,
    name,
    isError,
    isSuccess,
    setValue,
    validation,
    rows,
    cols,
    value,
    n,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={value}
            rules={{
                onChange(e) {
                    if (n !== undefined) {
                        setValue(
                            name,
                            e.target.value,
                            n,
                            control._formState.isValid
                        );
                    } else {
                        setValue(name, e.target.value);
                    }
                },
                ...validation,
            }}
            render={({ field }) => (
                <InputFieldContainer isError={isError} isSuccess={isSuccess}>
                    <InputFieldLabel>{label}</InputFieldLabel>
                    <TextArea
                        {...field}
                        rows={rows}
                        cols={cols}
                        placeholder={placeholder}
                        value={value}
                        maxLength={1000}
                    />
                    {hint ? <InputFieldHint>{hint}</InputFieldHint> : null}
                </InputFieldContainer>
            )}
        />
    );
};

export default InputTextField;
