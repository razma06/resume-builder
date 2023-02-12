import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import InputTextField from "@/components/shared/inputField/InputTextField";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import {
    mailValidation,
    phoneValidation,
    nameValidation,
    aboutMeValidation,
} from "@/utils/validators";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useGeneralInfoStore } from "@/stores/generalInfo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FileInput from "@/components/library/FileInput";
import { fieldsAreEmpty } from "@/utils/helpers";
import { motion } from "framer-motion";

const GeneralInfoForm = () => {
    const {
        handleSubmit,
        setError,
        clearErrors,
        control,
        trigger,
        formState: { errors, isValid: formIsValid },
    } = useForm({ mode: "onChange" });
    const setGeneralInfo = useGeneralInfoStore((state) => state.setGeneralInfo);
    const generalinfo = useGeneralInfoStore((state) => state.generalInfo);
    const setIsValid = useGeneralInfoStore((state) => state.setIsValid);
    const isValid = useGeneralInfoStore((state) => state.isValid);
    const navigate = useNavigate();

    useEffect(() => {
        if (fieldsAreEmpty(generalinfo)) {
            clearErrors();
        } else {
            trigger();
        }
        clearErrors("image");
    }, []);

    useEffect(() => {
        setIsValid(formIsValid);
    }, [formIsValid]);

    const onSubmit: SubmitHandler<FieldValues> = () => {
        if (!generalinfo.image?.length) {
            setError("image", { type: "required" });
        } else {
            if (Object.keys(errors).length > 0) return;
            navigate("/add/2");
        }
    };

    return (
        <Flex
            as={motion.form}
            initial={{ width: "50%" }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 5 } }}
            position="relative"
            onSubmit={handleSubmit(onSubmit)}
            flexDirection="column"
            rowGap="25px"
            width="100%"
            height="100%"
            minHeight="75vh"
        >
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="text"
                    label="სახელი"
                    placeholder="ანზორ"
                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                    name="name"
                    validation={nameValidation}
                    value={generalinfo.name}
                    control={control}
                    setValue={setGeneralInfo}
                />
                <InputField
                    type="text"
                    label="გვარი"
                    placeholder="მუმლაძე"
                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                    name="surname"
                    validation={nameValidation}
                    value={generalinfo.surname}
                    control={control}
                    setValue={setGeneralInfo}
                />
            </Flex>
            <FileInput
                errors={errors}
                control={control}
                name={"image"}
                setValue={setGeneralInfo}
            />
            <InputTextField
                control={control}
                name="about_me"
                setValue={setGeneralInfo}
                validation={aboutMeValidation}
                label="ჩემ შესახებ (არასავალდებულო)"
                placeholder="ზოგადი ინფო შენ შესახებ"
                rows={5}
                cols={20}
                isSuccess={!errors.aboutMe && !!generalinfo.about_me}
                isError={errors.aboutMe && true}
                value={generalinfo.about_me}
            />

            <InputField
                type="text"
                label="ელ.ფოსტა"
                placeholder="anzorr69@redberry.ge"
                hint="უნდა მთავრდებოდეს @redberry.ge"
                name="email"
                validation={mailValidation}
                value={generalinfo.email}
                control={control}
                setValue={setGeneralInfo}
            />
            <InputField
                type="text"
                label="მობილურის ნომერი"
                placeholder="+995 551 12 34 56"
                hint="უნდა აკმაყოფილებდეს ქართული მობულური ნომრის ფორმატს"
                name="phone_number"
                validation={phoneValidation}
                value={generalinfo.phone_number}
                control={control}
                setValue={setGeneralInfo}
            />
            <Flex
                style={{ bottom: "0" }}
                flexDirection="row-reverse"
                position="absolute"
                width="100%"
                justifyContent="space-between"
            >
                <PageNavButton value="შემდეგი" />
            </Flex>
        </Flex>
    );
};

export default GeneralInfoForm;
