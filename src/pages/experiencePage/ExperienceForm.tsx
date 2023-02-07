import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import { useExperienceStore } from "@/stores/experience";
import {
    dateValidation,
    jobDescriptionValidation,
    jobTitleValidation,
    nameValidation,
} from "@/utils/validators";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ExperienceForm = React.forwardRef(({ n }: { n: number }, ref: any) => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        trigger,
        formState: { errors, dirtyFields, isValid },
    } = useForm({ mode: "onChange" });
    const experience = useExperienceStore((state) => state.experience);
    const setExperience = useExperienceStore((state) => state.setExperience);
    const navigation = useNavigate();

    useEffect(() => {
        if (
            Object.values(experience[n].data).every((value) => !value === false)
        ) {
            trigger();
        }
    }, []);

    const submitHandler = (data: any, e: any) => {
        console.log("submitted");
        navigation("/add/3");
    };

    return (
        <Flex
            as="form"
            position="relative"
            flexDirection="column"
            rowGap="25px"
            width="100%"
            onSubmit={handleSubmit(submitHandler)}
            ref={ref}
        >
            <InputField
                label="თანამდებობა"
                placeholder="დეველოპერი, დიზაინერი, ა.შ"
                type="text"
                hint="მინიმუმ 2 სიმბოლო"
                value={experience[n].data.position}
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
                value={experience[n].data.employer}
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
                    value={experience[n].data.start_date}
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
                    value={experience[n].data.end_date}
                    setValue={setExperience}
                    control={control}
                    name="end_date"
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
                value={experience[n].data.description}
                control={control}
                setValue={setExperience}
                name="description"
                validation={jobDescriptionValidation}
                isError={errors.description && true}
                isSuccess={
                    !errors.description && !!experience[n].data.description
                }
                n={n}
            />
        </Flex>
    );
});

export default ExperienceForm;
