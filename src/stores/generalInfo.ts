import { create } from "zustand";

export interface GeneralInfo {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    aboutMe?: string;
    idImage: FileList;
}

export interface GeneralInfoStore {
    generalInfo: GeneralInfo;
    setGeneralInfo: (generalInfo: GeneralInfo) => void;
}

export const useGeneralInfoStore = create<GeneralInfoStore>((set) => ({
    generalInfo: {
        name: "",
        secondName: "",
        email: "",
        phone: "",
        aboutMe: "",
        idImage: {} as FileList,
    },
    setGeneralInfo: (generalInfo: GeneralInfo) => set({ generalInfo }),
}));
