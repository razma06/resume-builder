import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";
import { InputFieldLabel } from "@/components/shared/inputField/InputField.styled";
import InputTextField from "@/components/shared/inputField/InputTextField";
import PagebackButton from "@/components/shared/pageNavButton/PageBackButton";
import PageNavButton from "@/components/shared/pageNavButton/PageNavButton";
import {
    imageValidation,
    mailValidation,
    phoneValidation,
    nameValidation,
} from "@/utils/validators";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useGeneralInfoStore } from "@/stores/generalInfo";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GeneralInfoForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        formState: { errors, dirtyFields },
    } = useForm({ mode: "onChange" });
    const setGeneralInfo = useGeneralInfoStore((state) => state.setGeneralInfo);
    const generalinfo = useGeneralInfoStore((state) => state.generalInfo);
    const navigate = useNavigate();

    const onChange = () => {
        const values = watch();
        const { name, secondName, email, phone, aboutMe, idImage } = values;
        setGeneralInfo({
            name,
            secondName,
            idImage,
            email,
            phone,
            aboutMe,
        });
    };

    useEffect(() => {
        setValue("idImage", generalinfo.idImage);
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (Object.keys(errors).length > 0) return;
        navigate("/add/2");
    };
    return (
        <Flex
            as="form"
            position="relative"
            onSubmit={handleSubmit(onSubmit)}
            onChange={onChange}
            flexDirection="column"
            rowGap="25px"
            width="100%"
            minHeight="75vh"
        >
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="text"
                    label="სახელი"
                    placeholder="ანზორ"
                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                    register={register("name", nameValidation)}
                    isError={errors.name && true}
                    isSuccess={!errors.name && dirtyFields.name}
                    value={generalinfo.name}
                />
                <InputField
                    type="text"
                    label="გვარი"
                    placeholder="მუმლაძე"
                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                    register={register("secondName", nameValidation)}
                    isSuccess={!errors.secondName && dirtyFields.secondName}
                    isError={errors.secondName && true}
                    value={generalinfo.secondName}
                />
            </Flex>
            <Flex
                style={{ marginBlock: "29px" }}
                alignItems="center"
                columnGap="19px"
            >
                <InputFieldLabel>პირადი ფოტოს ატვირთვა</InputFieldLabel>
                <input
                    className="file-input"
                    type="file"
                    accept=".jpg , .jpeg, .png"
                    {...register("idImage", imageValidation)}
                    defaultChecked={generalinfo.idImage ? true : false}
                />
            </Flex>
            <InputTextField
                label="ჩემ შესახებ (არასავალდებულო)"
                placeholder="ზოგადი ინფო შენ შესახებ"
                rows={5}
                cols={20}
                register={register("aboutMe")}
                isSuccess={!errors.aboutMe && dirtyFields.aboutMe}
                isError={errors.aboutMe && true}
                value={generalinfo.aboutMe}
            />

            <InputField
                type="text"
                label="ელ.ფოსტა"
                placeholder="anzorr69@redberry.ge"
                hint="უნდა მთავრდებოდეს @redberry.ge"
                register={register("email", mailValidation)}
                isSuccess={!errors.email && dirtyFields.email}
                isError={errors.email && true}
                value={generalinfo.email}
            />
            <InputField
                type="text"
                label="მობილურის ნომერი"
                placeholder="+995 551 12 34 56"
                hint="უნდა აკმაყოფილებდეს ქართული მობულური ნომრის ფორმატს"
                register={register("phone", phoneValidation)}
                isSuccess={!errors.phone && dirtyFields.phone}
                isError={errors.phone && true}
                value={generalinfo.phone}
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
