import { create } from "zustand";

export interface GeneralInfo {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    aboutMe?: string;
    idImage: string | FileList | undefined;
}

export interface GeneralInfoStore {
    generalInfo: GeneralInfo;
    setGeneralInfo: (name: string, value: any) => void;
}

const emptyGeneralInfo = {
    name: "",
    secondName: "",
    email: "",
    phone: "",
    aboutMe: "",
    idImage: "",
};

const defaultGeneralInfo = JSON.parse(
    localStorage.getItem("generalInfo") || JSON.stringify(emptyGeneralInfo)
);

export const useGeneralInfoStore = create<GeneralInfoStore>((set) => ({
    generalInfo: defaultGeneralInfo,
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
