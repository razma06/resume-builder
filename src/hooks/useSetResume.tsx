import { setResume } from "@/services/setResume";
import { useEducationStore } from "@/stores/education";
import { useExperienceStore } from "@/stores/experience";
import { useGeneralInfoStore } from "@/stores/generalInfo";
import React, { useState } from "react";

const useSetResume = () => {
    const generalInfo = useGeneralInfoStore((state) => state.generalInfo);
    const experiences = useExperienceStore((state) => state.experience);
    const educations = useEducationStore((state) => state.education);

    const setGeneralInfo = useGeneralInfoStore(
        (state) => state.setResponseData
    );
    const setExperiences = useExperienceStore((state) => state.setResponseData);
    const setEducations = useEducationStore((state) => state.setResponseData);

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");

    const sendRequest = async () => {
        let [contentType, base64] = (generalInfo.image as string)?.split(",");
        const byteString = atob(base64);
        let int8Array = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([int8Array], { type: contentType });
        const file = new File([blob], "image.png", { type: contentType });

        const resume = {
            ...generalInfo,
            image: file,
            experiences: experiences.filter((exp) => exp.position !== ""),
            educations: educations.filter((edu) => edu.institute !== ""),
        };
        setIsLoading(true);
        setResume(resume)
            .then((res) => {
                setGeneralInfo(res.data);
                setExperiences(res.data);
                setEducations(res.data);
                setIsError(false);
                setMessage("რეზიუმე წარმატებით შეინახა");
                localStorage.clear();
            })
            .catch((err) => {
                setIsError(true);
                setMessage(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { sendRequest, message, isError, isLoading };
};

export default useSetResume;
