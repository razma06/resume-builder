import GeneralInfoForm from "@/pages/generalInfoPage/GeneralInfoForm";
import React from "react";
import {
    Control,
    Controller,
    FieldValue,
    FieldValues,
    UseFormRegisterReturn,
} from "react-hook-form";
import {
    Input,
    InputFieldContainer,
    InputFieldHint,
    InputFieldLabel,
} from "./InputField.styled";
import Select from "react-select";
import ReactSelect from "@/components/library/ReactSelect";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type: string;
    hint?: string;
    isError?: boolean;
    isSuccess?: boolean;
    value?: any;
    register?: UseFormRegisterReturn<string>;
    wantSelect?: boolean;
    options?: any[];
    control?: Control<FieldValues, any>;
    name?: string;
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
    wantSelect,
    options,
    control,
    name = "",
}) => {
    return (
        <InputFieldContainer isError={isError} isSuccess={isSuccess}>
            <InputFieldLabel>{label}</InputFieldLabel>
            {wantSelect ? (
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <ReactSelect
                            {...field}
                            placeholder={placeholder}
                            options={options}
                            getOptionLabel={(option: any) => option.title}
                        />
                    )}
                ></Controller>
            ) : (
                <Input
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    {...register}
                />
            )}
            <InputFieldHint>{hint}</InputFieldHint>
        </InputFieldContainer>
    );
};

export default InputField;
