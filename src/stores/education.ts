import { getDegrees } from "@/services/getDegrees";
import { create } from "zustand";

export interface Education {
    isValid: boolean;
    data: {
        school: string;
        degree: { title: string; id: number };
        endDate: string;
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
        school: "",
        degree: { title: "", id: 0 },
        endDate: "",
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
    setEducation: (name, value, n, isValid) => {
        set((state) => {
            const newData = {
                education: [
                    ...state.education.slice(0, n),
                    {
                        isValid,
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
