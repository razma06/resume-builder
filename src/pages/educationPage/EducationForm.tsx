import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import { useEducationStore } from "@/stores/education";
import {
    nameValidation,
    jobDescriptionValidation,
    dateValidation,
} from "@/utils/validators";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EducationForm = () => {
    const getDegreesData = useEducationStore((state) => state.getDegreesData);
    const degreeData = useEducationStore((state) => state.degree);
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors, dirtyFields },
    } = useForm({ mode: "onChange" });

    const onChange = () => {
        const values = watch();
        console.log(values);
    };

    useEffect(() => {
        getDegreesData();
    }, []);
    console.log(degreeData);

    return (
        <Flex
            as="form"
            position="relative"
            flexDirection="column"
            rowGap="25px"
            width="100%"
            onChange={onChange}
        >
            <InputField
                type="text"
                label="სასწავლებელი"
                placeholder="სასწავლებელი"
                hint="მინიმუმ 2 სიმბოლო"
                register={register("school", nameValidation)}
                isError={errors.school && true}
                isSuccess={!errors.school && dirtyFields.school}
            />
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="text"
                    label="ხარისხი"
                    wantSelect={true}
                    options={degreeData.data}
                    placeholder="აირჩიეთ ხარისხი"
                    name="degree"
                    control={control}
                    isError={errors.degree && true}
                    isSuccess={!errors.degree && dirtyFields.degree}
                />
                <InputField
                    type="date"
                    label="დამთავრების რიცხვი"
                    placeholder="ანზორ"
                    register={register("endDate", dateValidation)}
                    isError={errors.endDate && true}
                    isSuccess={!errors.endDate && dirtyFields.endDate}
                />
            </Flex>
            <InputTextField
                rows={9}
                cols={5}
                label="აღწერა"
                placeholder="განათლების აღწერა"
                register={register("description", jobDescriptionValidation)}
                isError={errors.description && true}
                isSuccess={!errors.description && dirtyFields.description}
            />
        </Flex>
    );
};

export default EducationForm;
