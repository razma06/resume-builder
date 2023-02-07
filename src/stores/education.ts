import { getDegrees } from "@/services/getDegrees";
import { create } from "zustand";

export interface Education {
    isValid: boolean;
    data: {
        institute: string;
        degree: { title: string; id: number };
        due_date: string;
        description: string;
    };
}

export interface Degree {
    error: boolean;
    data: string[];
}

interface EducationStore {
    education: Education[];
    setEducation: (
        name: string,
        value: any,
        n: number,
        isValid: boolean
    ) => void;
    addEducation: () => void;
    getDegreesData: () => void;
    degree: Degree;
}

const emptyEducation: Education = {
    isValid: false,
    data: {
        institute: "",
        degree: { title: "", id: 0 },
        due_date: "",
        description: "",
    },
};

const defaultEducation = JSON.parse(
    localStorage.getItem("education") || `[${JSON.stringify(emptyEducation)}]`
);

export const useEducationStore = create<EducationStore>((set) => ({
    education: defaultEducation,
    addEducation: () => {
        set((state) => ({
            education: [
                ...state.education,
                { ...emptyEducation, isValid: true },
            ],
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
                        data: {
                            ...state.education[n].data,
                            [name]: value,
                        },
                    },
                    ...state.education.slice(n + 1),
                ],
            };
            console.log(newData);
            localStorage.setItem(
                "education",
                JSON.stringify(newData.education)
            );
            return newData;
        });
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
