import { getDegrees } from "@/services/getDegrees";
import { create } from "zustand";

export interface Education {
    school: string;
    degree: string;
    endDate: string;
    description: string;
}

export interface Degree {
    error: boolean;
    data: string[];
}

interface EducationStore {
    education: Education[];
    setEducation: (education: Education[]) => void;
    addEducation: () => void;
    getDegreesData: () => void;
    degree: Degree;
}

const defaultEdication: Education = {
    school: "",
    degree: "",
    endDate: "",
    description: "",
};

export const useEducationStore = create<EducationStore>((set) => ({
    education: [defaultEdication],
    addEducation: () => {
        set((state) => ({
            education: [...state.education, defaultEdication],
        }));
    },
    degree: {
        error: false,
        data: [],
    },
    setEducation: (education) => set({ education }),
    async getDegreesData() {
        try {
            const response = await getDegrees();
            set((state) => ({ degree: { error: false, data: response.data } }));
        } catch {
            set((state) => ({ degree: { error: true, data: [] } }));
        }
    },
}));
