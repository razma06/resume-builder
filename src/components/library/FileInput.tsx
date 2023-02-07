import React, { useRef } from "react";
import { InputFieldLabel } from "@/components/shared/inputField/InputField.styled";
import { Flex } from "@/components/library/Flex.styled";
import { FileInputStyled } from "./FileInput.styled";
import {
    Control,
    Controller,
    FieldValues,
    useController,
} from "react-hook-form";

interface FileInputProps {
    control: Control<FieldValues, any>;
    name: string;
    errors: any;
    setValue: (...args: any) => void;
}

const FileInput: React.FC<FileInputProps> = ({
    control,
    name,
    errors,
    setValue,
}) => {
    const fileChange = (e: any) => {
        const reader = new FileReader();

        reader.onload = () => {
            setValue(name, reader.result as string);
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <Flex
            style={{ marginBlock: "29px" }}
            alignItems="center"
            columnGap="19px"
        >
            <InputFieldLabel>პირადი ფოტოს ატვირთვა</InputFieldLabel>
            <Controller
                name={name}
                control={control}
                rules={{
                    onChange(e) {
                        fileChange(e.target.value);
                    },
                }}
                render={({ field }) => (
                    <>
                        <FileInputStyled
                            {...field}
                            onChange={(e) => fileChange(e)}
                            type="file"
                            accept=".jpg , .jpeg, .png"
                        />
                        {errors.image && (
                            <span className="file-error">
                                ფოტოს შეტანა აუცილებელია
                            </span>
                        )}
                    </>
                )}
            />
        </Flex>
    );
};

export default FileInput;
