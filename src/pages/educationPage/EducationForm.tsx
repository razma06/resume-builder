import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import { useEducationStore } from "@/stores/education";
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
    const getDegreesData = useEducationStore((state) => state.getDegreesData);
    const degreeData = useEducationStore((state) => state.degree);
    const education = useEducationStore((state) => state.education);
    const setEducation = useEducationStore((state) => state.setEducation);
    const {
        control,
        trigger,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm({ mode: "onChange" });
    const navigation = useNavigate();

    useEffect(() => {
        getDegreesData();

        if (
            Object.values(education[n].data).every((value) => !value === false)
        ) {
            trigger();
        }
    }, []);

    const submitHandler = (data: any, e: any) => {
        navigation("/");
    };

    return (
        <Flex
            as="form"
            position="relative"
            flexDirection="column"
            rowGap="25px"
            width="100%"
            ref={ref}
            onSubmit={handleSubmit(submitHandler)}
        >
            <InputField
                type="text"
                label="სასწავლებელი"
                placeholder="სასწავლებელი"
                hint="მინიმუმ 2 სიმბოლო"
                name="institute"
                control={control}
                setValue={setEducation}
                value={education[n].data.institute}
                validation={jobTitleValidation}
                dirtyFields={dirtyFields}
                n={n}
            />
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="text"
                    label="ხარისხი"
                    wantSelect={true}
                    options={degreeData.data}
                    placeholder="აირჩიეთ ხარისხი"
                    name="degree"
                    value={education[n].data.degree}
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
                    value={education[n].data.due_date}
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
                name="description"
                validation={jobDescriptionValidation}
                n={n}
                isError={errors.description && true}
                isSuccess={
                    !errors.description && !!education[n].data.description
                }
                value={education[n].data.description}
            />
        </Flex>
    );
});

export default EducationForm;
