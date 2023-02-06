import { create } from "zustand";

export interface Experience {
    isValid: boolean;
    data: {
        position: string;
        employer: string;
        startDate: string;
        endDate: string;
        description: string;
    };
}

interface ExperienceStore {
    experience: Experience[];
    setExperience: (
        name: string,
        value: any,
        n: number,
        isValid: boolean
    ) => void;
    addExperience: () => void;
}

const emptyExperience: Experience = {
    isValid: false,
    data: {
        position: "",
        employer: "",
        startDate: "",
        endDate: "",
        description: "",
    },
};

const defaultExperience = JSON.parse(
    localStorage.getItem("experience") || `[${JSON.stringify(emptyExperience)}]`
);

export const useExperienceStore = create<ExperienceStore>((set) => ({
    experience: defaultExperience,
    addExperience: () => {
        set((state) => ({
            experience: [
                ...state.experience,
                { ...emptyExperience, isValid: true },
            ],
        }));
    },
    setExperience: (name, value, n, isValid) => {
        set((state) => {
            const newExperience = {
                experience: [
                    ...state.experience.slice(0, n),
                    {
                        isValid,
                        data: {
                            ...state.experience[n].data,
                            [name]: value,
                        },
                    },
                    ...state.experience.slice(n + 1),
                ],
            };
            localStorage.setItem(
                "experience",
                JSON.stringify(newExperience.experience)
            );
            return newExperience;
        });
    },
}));
