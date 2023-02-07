import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import {
    ErrorImage,
    Input,
    InputContainer,
    InputFieldContainer,
    InputFieldHint,
    InputFieldLabel,
    SuccessImage,
} from "./InputField.styled";
import ReactSelect from "@/components/library/ReactSelect";
import SuccesIcon from "@/assets/icons/success-icon.svg";
import ErrorIcon from "@/assets/icons/error-icon.svg";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type: string;
    hint?: string;
    dirtyFields?: any;
    value?: any;
    wantSelect?: boolean;
    options?: any[];
    control: Control<FieldValues, any>;
    name: string;
    validation?: any;
    setValue: (...args: any) => void;
    n?: number;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    hint,
    type,
    value,
    wantSelect,
    options,
    control,
    name,
    validation,
    setValue,
    n,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={value.title !== undefined ? value.title : value}
            rules={{
                onChange(e) {
                    if (n !== undefined) {
                        setValue(name, e.target.value, n);
                    } else {
                        setValue(name, e.target.value);
                    }
                },
                ...validation,
            }}
            render={({ field, fieldState: { invalid } }) => (
                <InputFieldContainer
                    isError={invalid}
                    isSuccess={!invalid && value}
                >
                    <InputFieldLabel>{label}</InputFieldLabel>
                    {wantSelect ? (
                        <ReactSelect
                            {...field}
                            isError={invalid}
                            isSuccess={!invalid && !!value.title}
                            placeholder={placeholder}
                            value={field.value || value.title}
                            options={options}
                            getOptionLabel={(option: any) => option.title}
                        />
                    ) : (
                        <InputContainer>
                            <Input
                                {...field}
                                value={field.value || value}
                                placeholder={placeholder}
                                type={type}
                                maxLength={80}
                            />
                            {type == "text" &&
                                (invalid ? (
                                    <ErrorImage src={ErrorIcon} alt="error" />
                                ) : (
                                    !invalid &&
                                    field.value && (
                                        <SuccessImage
                                            src={SuccesIcon}
                                            alt="success"
                                        />
                                    )
                                ))}
                        </InputContainer>
                    )}
                    <InputFieldHint>{hint}</InputFieldHint>
                </InputFieldContainer>
            )}
        />
    );
};

export default InputField;
