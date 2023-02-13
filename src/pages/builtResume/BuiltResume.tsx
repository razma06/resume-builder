import BackHomeButton from "@/components/library/BackHomeButton";
import Resume from "@/components/shared/resume/Resume";
import useSetResume from "@/hooks/useSetResume";
import { useEducationStore } from "@/stores/education";
import { useExperienceStore } from "@/stores/experience";
import { useGeneralInfoStore } from "@/stores/generalInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomToast from "@/components/library/CustomToast";
import Loader from "@/components/library/Loader";
import { motion } from "framer-motion";

const BuiltResume = () => {
    const { sendRequest, isError, isLoading, message } = useSetResume();
    const generalInfoIsValid = useGeneralInfoStore((state) => state.isValid);
    const experienceIsValid = useExperienceStore((state) => state.isValid);
    const educationIsValid = useEducationStore((state) => state.isValid);

    const navigate = useNavigate();

    useEffect(() => {
        if (!generalInfoIsValid) navigate("/add/1");
        else if (!experienceIsValid.every((val) => val === true))
            navigate("/add/2");
        else if (!educationIsValid.every((val) => val === true))
            navigate("/add/3");
        else sendRequest();
    }, []);

    return !isLoading ? (
        <div style={{ paddingBlock: "70px" }}>
            <CustomToast isError={true} message={message} />

            <BackHomeButton wantRefresh />

            {!isError && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -200,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.3,
                        },
                    }}
                >
                    <Resume built />
                </motion.div>
            )}
        </div>
    ) : (
        <Loader />
    );
};

export default BuiltResume;
