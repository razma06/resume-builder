import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import { emptyExperience, useExperienceStore } from "@/stores/experience";
import { fieldsAreEmpty } from "@/utils/helpers";
import {
    dateValidation,
    jobDescriptionValidation,
    jobTitleValidation,
    nameValidation,
} from "@/utils/validators";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ExperienceForm = React.forwardRef(
    (
        {
            n,
        }: {
            n: number;
        },
        ref: any
    ) => {
        const {
            handleSubmit,
            clearErrors,
            control,
            trigger,
            formState: { errors, dirtyFields, isValid: formIsValid },
        } = useForm({ mode: "onChange" });
        const experience = useExperienceStore((state) => state.experience);
        const setExperience = useExperienceStore(
            (state) => state.setExperience
        );
        const isValid = useExperienceStore((state) => state.isValid);
        const setIsValid = useExperienceStore((state) => state.setIsValid);

        const navigation = useNavigate();

        useEffect(() => {
            if (fieldsAreEmpty(experience[n])) {
                clearErrors();
            } else {
                trigger();
            }
        }, []);

        useEffect(() => {
            if (
                JSON.stringify(experience[n]) ===
                    JSON.stringify(emptyExperience) &&
                n > 0
            ) {
                setIsValid(true, n);
            } else {
                setIsValid(formIsValid, n);
            }
        }, [formIsValid]);

        useEffect(() => {
            if (n > 0) {
                if (
                    JSON.stringify(experience[n]) ===
                    JSON.stringify(emptyExperience)
                ) {
                    clearErrors();
                    setIsValid(true, n);
                } else {
                    setIsValid(formIsValid, n);
                }
            }
        }, [experience[n]]);

        console.log(ref);

        const submitHandler = () => {
            if (isValid.every((val) => val === true)) navigation("/add/3");
        };

        const invalidHandler = () => {
            if (
                JSON.stringify(experience[n]) ===
                    JSON.stringify(emptyExperience) &&
                n > 0
            ) {
                clearErrors();
            }
        };

        return (
            <Flex
                as={motion.form}
                initial={{ width: "50%" }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 5 } }}
                position="relative"
                flexDirection="column"
                rowGap="25px"
                width="100%"
                onSubmit={handleSubmit(submitHandler, invalidHandler)}
                ref={ref}
            >
                <InputField
                    label="თანამდებობა"
                    placeholder="დეველოპერი, დიზაინერი, ა.შ"
                    type="text"
                    hint="მინიმუმ 2 სიმბოლო"
                    value={experience[n].position}
                    control={control}
                    setValue={setExperience}
                    name="position"
                    validation={jobTitleValidation}
                    dirtyFields={dirtyFields}
                    n={n}
                />
                <InputField
                    label="დამსაქმებელი"
                    placeholder="დამსაქმებელი"
                    type="text"
                    hint="მინიმუმ 2 სიმბოლო"
                    value={experience[n].employer}
                    control={control}
                    setValue={setExperience}
                    name="employer"
                    validation={jobTitleValidation}
                    dirtyFields={dirtyFields}
                    n={n}
                />
                <Flex columnGap="56px" width="100%">
                    <InputField
                        type="date"
                        label="დაწყების რიცხვი"
                        placeholder="ანზორ"
                        value={experience[n].start_date}
                        control={control}
                        setValue={setExperience}
                        name="start_date"
                        validation={dateValidation}
                        dirtyFields={dirtyFields}
                        n={n}
                    />
                    <InputField
                        type="date"
                        label="დამთავრების რიცხვი"
                        placeholder="მუმლაძე"
                        value={experience[n].due_date}
                        setValue={setExperience}
                        control={control}
                        name="due_date"
                        validation={dateValidation}
                        dirtyFields={dirtyFields}
                        n={n}
                    />
                </Flex>
                <InputTextField
                    label="აღწერა"
                    placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                    rows={5}
                    cols={20}
                    value={experience[n].description}
                    control={control}
                    setValue={setExperience}
                    name="description"
                    validation={jobDescriptionValidation}
                    isError={errors.description && true}
                    isSuccess={
                        !errors.description && !!experience[n].description
                    }
                    n={n}
                />
            </Flex>
        );
    }
);

export default ExperienceForm;
