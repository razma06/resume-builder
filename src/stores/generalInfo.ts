import { create } from "zustand";

export interface GeneralInfo {
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    about_me?: string;
    image: string | FileList | undefined;
}

export interface GeneralInfoStore {
    generalInfo: GeneralInfo;
    isValid: boolean;
    setIsValid: (isValid: boolean) => void;
    setResponseData: (data: GeneralInfo) => void;
    setGeneralInfo: (name: string, value: any) => void;
}

const emptyGeneralInfo = {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    about_me: "",
    image: "",
};

const defaultGeneralInfo = JSON.parse(
    localStorage.getItem("generalInfo") || JSON.stringify(emptyGeneralInfo)
);

const defaultGeneralInfoIsValid = JSON.parse(
    localStorage.getItem("generalInfoIsValid") || "false"
);

export const useGeneralInfoStore = create<GeneralInfoStore>((set) => ({
    generalInfo: defaultGeneralInfo,
    isValid: defaultGeneralInfoIsValid,
    setIsValid: (isValid) =>
        set((state) => {
            localStorage.setItem("generalInfoIsValid", JSON.stringify(isValid));
            return { isValid };
        }),
    setResponseData: (data) => {
        console.log(data.image);
        set({
            generalInfo: {
                name: data.name,
                surname: data.surname,
                email: data.email,
                phone_number: data.phone_number,
                about_me: data.about_me,
                image: "https://resume.redberryinternship.ge" + data.image,
            },
        });
    },
    setGeneralInfo: (name, value) => {
        set((state) => {
            const newGeneralInfo = {
                generalInfo: { ...state.generalInfo, [name]: value },
            };

            localStorage.setItem(
                "generalInfo",
                JSON.stringify(newGeneralInfo.generalInfo)
            );
            return newGeneralInfo;
        });
    },
}));
