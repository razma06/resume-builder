import { create } from "zustand";

export interface Experience {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface ExperienceStore {
    experience: Experience[];
    setExperience: (experience: Experience[]) => void;
}

export const useExperienceStore = create<ExperienceStore>((set) => ({
    experience: [
        {
            position: "",
            employer: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    ],

    setExperience: (experience) => set({ experience }),
}));
