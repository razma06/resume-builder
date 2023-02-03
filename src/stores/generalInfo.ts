import { create } from "zustand";

export interface GeneralInfo {
    name: string;
    secondName: string;
    age: number;
    address: string;
}

export interface GeneralInfoStore {
    generalInfo: GeneralInfo;
    setGeneralInfo: (generalInfo: GeneralInfo) => void;
}

export const useGeneralInfoStore = create<GeneralInfoStore>((set) => ({
    generalInfo: {
        name: "",
        secondName: "",
        age: 30,
        address: "123 Main St",
    },
    setGeneralInfo: (generalInfo: GeneralInfo) => set({ generalInfo }),
}));
