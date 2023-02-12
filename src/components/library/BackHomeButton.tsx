import React from "react";
import { Link } from "react-router-dom";
import BackButton from "@/assets/icons/back-button.svg";

const BackHomeButton: React.FC<{ wantRefresh?: boolean }> = ({
    wantRefresh,
}) => {
    return wantRefresh ? (
        <a href="/" style={{ position: "absolute", left: "65px", top: "45px" }}>
            <img src={BackButton} alt="" />
        </a>
    ) : (
        <Link
            to="/"
            style={{ position: "absolute", left: "65px", top: "45px" }}
        >
            <img src={BackButton} alt="" />
        </Link>
    );
};

export default BackHomeButton;
