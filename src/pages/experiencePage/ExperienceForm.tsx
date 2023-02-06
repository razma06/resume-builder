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
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ExperienceForm = ({ n }: { n: number }) => {
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

    const onChange = () => {
        // const values = watch();
        // console.log(isValid);
        // const { position, employer, startDate, endDate, description } = values;
        // const newData = {
        //     position,
        //     employer,
        //     startDate,
        //     endDate,
        //     description,
        // };
        // setExperience([
        //     ...experience.slice(0, n),
        //     { data: newData, isValid },
        //     ...experience.slice(n + 1),
        // ]);
    };

    useEffect(() => {
        trigger();
    }, []);

    const submitHandler = (data: any, e: any) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <Flex
            as="form"
            position="relative"
            flexDirection="column"
            rowGap="25px"
            width="100%"
            onChange={onChange}
            onSubmit={handleSubmit(submitHandler)}
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
                    value={experience[n].data.startDate}
                    control={control}
                    setValue={setExperience}
                    name="startDate"
                    validation={dateValidation}
                    dirtyFields={dirtyFields}
                    n={n}
                />
                <InputField
                    type="date"
                    label="დამთავრების რიცხვი"
                    placeholder="მუმლაძე"
                    value={experience[n].data.endDate}
                    setValue={setExperience}
                    control={control}
                    name="endDate"
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
};

export default ExperienceForm;
