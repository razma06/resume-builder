import { Flex } from "@/components/library/Flex.styled";
import InputField from "@/components/shared/inputField/InputField";

const GeneralInfoForm = () => {
    return (
        <Flex flexDirection="column" rowGap="25px" width="100%">
            <Flex columnGap="56px" width="100%">
                <InputField
                    type="text"
                    label="სახელი"
                    placeholder="ანზორ"
                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                />
                <InputField
                    type="text"
                    label="გვარი"
                    placeholder="მუმლაძე"
                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                />
            </Flex>
            <InputField
                type="text"
                label="ელ.ფოსტა"
                placeholder="anzorr69@redberry.ge"
                hint="უნდა მთავრდებოდეს @redberry.ge"
            />
            <InputField
                type="text"
                label="მობილურის ნომერი"
                placeholder="+995 551 12 34 56"
                hint="უნდა აკმაყოფილებდეს ქართული მობულური ნომრის ფორმატს"
            />
        </Flex>
    );
};

export default GeneralInfoForm;
