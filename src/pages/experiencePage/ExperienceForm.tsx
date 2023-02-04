import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import { useExperienceStore } from "@/stores/experience";
import {
    dateValidation,
    jobDescriptionValidation,
    nameValidation,
} from "@/utils/validators";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ExperienceForm = () => {
    const { register, handleSubmit, watch } = useForm();
    const experience = useExperienceStore((state) => state.experience);

    return (
        <Flex
            as="form"
            position="relative"
            flexDirection="column"
            rowGap="25px"
            width="100%"
            minHeight="75vh"
        >
            <InputField
                label="თანამდებობა"
                placeholder="დეველოპერი, დიზაინერი, ა.შ"
                type="text"
                hint="მინიმუმ 2 სიმბოლო"
                register={register("position", nameValidation)}
            />
            <InputField
                label="დამსაქმებელი"
                placeholder="დამსაქმებელი"
                type="text"
                hint="მინიმუმ 2 სიმბოლო"
                register={register("employer", nameValidation)}
            />
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="date"
                    label="დაწყების რიცხვი"
                    placeholder="ანზორ"
                    register={register("startDate", dateValidation)}
                />
                <InputField
                    type="date"
                    label="დამთავრების რიცხვი"
                    placeholder="მუმლაძე"
                    register={register("endDate", dateValidation)}
                />
            </Flex>
            <InputTextField
                label="აღწერა"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                rows={5}
                cols={20}
                register={register("description", jobDescriptionValidation)}
            />
            <Flex
                style={{ bottom: "0" }}
                flexDirection="row-reverse"
                position="absolute"
                width="100%"
                justifyContent="space-between"
            >
                <PageNavButton value="შემდეგი" />
                <Link to="/add/1">
                    <PagebackButton>უკან</PagebackButton>
                </Link>
            </Flex>
        </Flex>
    );
};

export default ExperienceForm;
