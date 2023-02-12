import { create } from "zustand";

export interface Experience {
    position: string;
    employer: string;
    start_date: string;
    due_date: string;
    description: string;
}

interface ExperienceStore {
    experience: Experience[];
    isValid: boolean[];
    setIsValid: (isValid: boolean, n: number) => void;
    setExperience: (name: string, value: any, n: number) => void;
    setResponseData: (data: any) => void;
    addExperience: () => void;
}

export const emptyExperience: Experience = {
    position: "",
    employer: "",
    start_date: "",
    due_date: "",
    description: "",
};

const defaultExperience = JSON.parse(
    localStorage.getItem("experience") || `[${JSON.stringify(emptyExperience)}]`
);

const defaultExperienceIsValid = JSON.parse(
    localStorage.getItem("experienceIsValid") ||
        JSON.stringify(new Array(defaultExperience.length).fill(false))
);

export const useExperienceStore = create<ExperienceStore>((set) => ({
    experience: defaultExperience,
    isValid: defaultExperienceIsValid,
    setIsValid: (isValid, n) =>
        set((state) => {
            state.isValid[n] = isValid;
            localStorage.setItem(
                "experienceIsValid",
                JSON.stringify(state.isValid)
            );
            return { isValid: state.isValid };
        }),
    addExperience: () => {
        set((state) => ({
            experience: [...state.experience, { ...emptyExperience }],
            isValid: [...state.isValid, true],
        }));
    },
    setResponseData: (data) => {
        set({
            experience: data.experiences,
        });
    },
    setExperience: (name, value, n) => {
        set((state) => {
            const newExperience = {
                experience: [
                    ...state.experience.slice(0, n),
                    {
                        ...state.experience[n],
                        [name]: value,
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
