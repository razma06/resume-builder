import BackHomeButton from "@/components/library/BackHomeButton";
import Resume from "@/components/shared/resume/Resume";
import useSetResume from "@/hooks/useSetResume";
import { useEducationStore } from "@/stores/education";
import { useExperienceStore } from "@/stores/experience";
import { useGeneralInfoStore } from "@/stores/generalInfo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuiltResume = () => {
    const { sendRequest, isError, isLoading, message } = useSetResume();
    const generalInfoIsValid = useGeneralInfoStore((state) => state.isValid);
    const experienceIsValid = useExperienceStore((state) => state.isValid);
    const educationIsValid = useEducationStore((state) => state.isValid);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("render");
        if (!generalInfoIsValid) navigate("/add/1");
        else if (!experienceIsValid.every((val) => val === true))
            navigate("/add/2");
        else if (!educationIsValid.every((val) => val === true))
            navigate("/add/3");
        else sendRequest();
    }, []);

    const notify = () =>
        toast(message, {
            style: {
                color: "#1A1A1A",
                padding: "35px 20px",
                borderRadius: "8px",
                fontSize: "28px",
                width: "427px",
                top: "53px",
                right: "170px",
            },
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            rtl: false,
            theme: "light",
        });

    useEffect(() => {
        if (!isLoading) notify();
    }, [isLoading]);

    return (
        !isLoading && (
            <>
                <ToastContainer />
                <BackHomeButton wantRefresh />
                {!isError && <Resume built />}
            </>
        )
    );
};

export default BuiltResume;
