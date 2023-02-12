import { getDegrees } from "@/services/getDegrees";
import { create } from "zustand";

export interface Education {
    institute: string;
    degree_id: number | null;
    due_date: string;
    description: string;
    degree?: string;
}

export interface Degree {
    error: boolean;
    data: { id: number; title: string }[];
}

interface EducationStore {
    education: Education[];
    setEducation: (
        name: string,
        value: any,
        n: number,
        isValid: boolean
    ) => void;
    isValid: boolean[];
    setIsValid: (isValid: boolean, n: number) => void;
    addEducation: () => void;
    getDegreesData: () => void;
    setResponseData: (data: Education) => void;
    degree: Degree;
}

export const emptyEducation: Education = {
    institute: "",
    degree_id: null,
    due_date: "",
    description: "",
};

const defaultEducation = JSON.parse(
    localStorage.getItem("education") || `[${JSON.stringify(emptyEducation)}]`
);

const defaultEducationIsValid = JSON.parse(
    localStorage.getItem("educationIsValid") ||
        JSON.stringify(new Array(defaultEducation.length).fill(false))
);

export const useEducationStore = create<EducationStore>((set) => ({
    education: defaultEducation,
    isValid: defaultEducationIsValid,
    setIsValid: (isValid, n) =>
        set((state) => {
            state.isValid[n] = isValid;

            localStorage.setItem(
                "educationIsValid",
                JSON.stringify(state.isValid)
            );

            return { isValid: state.isValid };
        }),
    addEducation: () => {
        set((state) => ({
            education: [...state.education, { ...emptyEducation }],
            isValid: [...state.isValid, true],
        }));
    },
    degree: {
        error: false,
        data: [],
    },
    setEducation: (name, value, n) => {
        set((state) => {
            const newData = {
                education: [
                    ...state.education.slice(0, n),
                    {
                        ...state.education[n],
                        [name]: value,
                    },
                    ...state.education.slice(n + 1),
                ],
            };
            localStorage.setItem(
                "education",
                JSON.stringify(newData.education)
            );
            return newData;
        });
    },
    setResponseData: (data: any) => {
        set({ education: data.educations });
    },
    async getDegreesData() {
        try {
            const response = await getDegrees();
            set((state) => ({ degree: { error: false, data: response.data } }));
        } catch {
            set((state) => ({ degree: { error: true, data: [] } }));
        }
    },
}));
