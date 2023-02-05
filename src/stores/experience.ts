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
    addExperience: () => void;
}

const defaultExperience: Experience = {
    position: "",
    employer: "",
    startDate: "",
    endDate: "",
    description: "",
};

export const useExperienceStore = create<ExperienceStore>((set) => ({
    experience: [defaultExperience],
    addExperience: () => {
        set((state) => ({
            experience: [...state.experience, defaultExperience],
        }));
    },
    setExperience: (experience) => set({ experience }),
}));
