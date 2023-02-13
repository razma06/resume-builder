import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CloseIcon from "@/assets/icons/close-button.svg";
import "react-toastify/dist/ReactToastify.css";

const CloseButton = ({ closeToast }: { closeToast: any }) => (
    <button
        style={{ position: "absolute", top: "14px", right: "8px" }}
        onClick={closeToast}
    >
        <img src={CloseIcon} />
    </button>
);

const CustomToast: React.FC<{
    message: string;
    isError: boolean;
}> = ({ message, isError }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (loaded) return;
        toast(message, {
            style: {
                position: "absolute",
                color: "#1A1A1A",
                padding: "35px 20px",
                borderRadius: "8px",
                fontSize: "28px",
                width: "427px",
                top: "43px",
                right: "70px",
                margin: "0px",
            },
            toastId: "success1",
            role: isError ? "error" : "success",
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            rtl: false,
            theme: "light",
        });
        setLoaded(true);
    }, []);

    return <ToastContainer limit={1} closeButton={CloseButton} />;
};

export default CustomToast;
