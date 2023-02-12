import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import { emptyEducation, useEducationStore } from "@/stores/education";
import {
    nameValidation,
    jobDescriptionValidation,
    dateValidation,
    jobTitleValidation,
} from "@/utils/validators";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EducationForm = React.forwardRef(({ n }: { n: number }, ref: any) => {
    const degreeData = useEducationStore((state) => state.degree);
    const education = useEducationStore((state) => state.education);
    const setEducation = useEducationStore((state) => state.setEducation);
    const isValid = useEducationStore((state) => state.isValid);
    const setIsValid = useEducationStore((state) => state.setIsValid);
    const {
        control,
        trigger,
        clearErrors,
        handleSubmit,
        formState: { errors, dirtyFields, isValid: formIsValid },
    } = useForm({ mode: "onChange" });
    const navigation = useNavigate();

    useEffect(() => {
        if (Object.values(education[n]).every((value) => !value === false)) {
            trigger();
        } else {
            clearErrors();
        }
    }, []);

    useEffect(() => {
        if (
            JSON.stringify(education[n]) === JSON.stringify(emptyEducation) &&
            n > 0
        ) {
            console.log("here");
            setIsValid(true, n);
        } else {
            setIsValid(formIsValid, n);
        }
    }, [formIsValid]);

    useEffect(() => {
        if (n > 0) {
            if (
                JSON.stringify(education[n]) === JSON.stringify(emptyEducation)
            ) {
                clearErrors();
                setIsValid(true, n);
            } else {
                setIsValid(formIsValid, n);
            }
        }
    }, [education[n]]);

    const submitHandler = () => {
        if (isValid.every((val) => val === true)) navigation("/resume");
    };

    const invalidHandler = () => {
        if (
            JSON.stringify(education[n]) === JSON.stringify(emptyEducation) &&
            n > 0
        ) {
            clearErrors();
        }
    };

    return (
        <Flex
            as="form"
            position="relative"
            flexDirection="column"
            rowGap="25px"
            width="100%"
            ref={ref}
            onSubmit={handleSubmit(submitHandler, invalidHandler)}
        >
            <InputField
                type="text"
                label="სასწავლებელი"
                placeholder="სასწავლებელი"
                hint="მინიმუმ 2 სიმბოლო"
                name="institute"
                control={control}
                setValue={setEducation}
                value={education[n].institute}
                validation={jobTitleValidation}
                dirtyFields={dirtyFields}
                n={n}
            />
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="text"
                    label="ხარისხი"
                    wantSelect={true}
                    placeholder="აირჩიეთ ხარისხი"
                    name="degree_id"
                    options={degreeData.data}
                    value={education[n].degree_id}
                    control={control}
                    setValue={setEducation}
                    dirtyFields={dirtyFields}
                    n={n}
                    validation={dateValidation}
                />
                <InputField
                    type="date"
                    label="დამთავრების რიცხვი"
                    placeholder="ანზორ"
                    control={control}
                    setValue={setEducation}
                    dirtyFields={dirtyFields}
                    name="due_date"
                    validation={dateValidation}
                    value={education[n].due_date}
                    n={n}
                />
            </Flex>
            <InputTextField
                rows={9}
                cols={5}
                label="აღწერა"
                placeholder="განათლების აღწერა"
                control={control}
                setValue={setEducation}
                value={education[n].description}
                name="description"
                validation={jobDescriptionValidation}
                n={n}
                isError={errors.description && true}
                isSuccess={!errors.description && !!education[n].description}
            />
        </Flex>
    );
});

export default EducationForm;
