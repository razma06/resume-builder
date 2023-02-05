import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import { useExperienceStore } from "@/stores/experience";
import {
    dateValidation,
    jobDescriptionValidation,
    nameValidation,
} from "@/utils/validators";
import { useForm } from "react-hook-form";

const ExperienceForm = ({ n }: { n: number }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, dirtyFields },
    } = useForm({ mode: "onChange" });
    const experience = useExperienceStore((state) => state.experience);
    const setExperience = useExperienceStore((state) => state.setExperience);

    const onChange = () => {
        const values = watch();
        const { position, employer, startDate, endDate, description } = values;
        const newData = {
            position,
            employer,
            startDate,
            endDate,
            description,
        };

        setExperience([
            ...experience.slice(0, n),
            newData,
            ...experience.slice(n + 1),
        ]);
    };

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
                label="თანამდებობა"
                placeholder="დეველოპერი, დიზაინერი, ა.შ"
                type="text"
                hint="მინიმუმ 2 სიმბოლო"
                value={experience[n].position}
                register={register("position", nameValidation)}
                isError={errors.position && true}
                isSuccess={!errors.position && dirtyFields.position}
            />
            <InputField
                label="დამსაქმებელი"
                placeholder="დამსაქმებელი"
                type="text"
                hint="მინიმუმ 2 სიმბოლო"
                value={experience[n].employer}
                register={register("employer", nameValidation)}
                isError={errors.employer && true}
                isSuccess={!errors.employer && dirtyFields.employer}
            />
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="date"
                    label="დაწყების რიცხვი"
                    placeholder="ანზორ"
                    value={experience[n].startDate}
                    register={register("startDate", dateValidation)}
                    isError={errors.startDate && true}
                    isSuccess={!errors.startDate && dirtyFields.startDate}
                />
                <InputField
                    type="date"
                    label="დამთავრების რიცხვი"
                    placeholder="მუმლაძე"
                    value={experience[n].endDate}
                    register={register("endDate", dateValidation)}
                    isError={errors.endDate && true}
                    isSuccess={!errors.endDate && dirtyFields.endDate}
                />
            </Flex>
            <InputTextField
                label="აღწერა"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                rows={5}
                cols={20}
                value={experience[n].description}
                register={register("description", jobDescriptionValidation)}
                isError={errors.description && true}
                isSuccess={!errors.description && dirtyFields.description}
            />
        </Flex>
    );
};

export default ExperienceForm;
