import { Link, useLocation } from "react-router-dom";
import {
    HeaderContainer,
    HeaderStepName,
    HeaderStepNumber,
} from "./Header.styled";
import BackButton from "@/assets/icons/back-button.svg";
import { headerTitles } from "@/globals/globalData";

const Header = () => {
    const location = useLocation();
    const step = location.pathname[location.pathname.length - 1] || "1";
    const stepName = headerTitles[step];
    return (
        <HeaderContainer justifyContent="space-between">
            <Link
                to="/"
                style={{ position: "absolute", left: "65px", top: "45px" }}
            >
                <img src={BackButton} alt="" />
            </Link>
            <HeaderStepName>{stepName}</HeaderStepName>
            <HeaderStepNumber>{step}/3</HeaderStepNumber>
        </HeaderContainer>
    );
};

export default Header;
