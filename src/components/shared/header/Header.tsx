import { Link, useLocation } from "react-router-dom";
import {
    HeaderContainer,
    HeaderStepName,
    HeaderStepNumber,
} from "./Header.styled";
import { headerTitles } from "@/globals/globalData";
import BackHomeButton from "@/components/library/BackHomeButton";

const Header = () => {
    const location = useLocation();
    const step = location.pathname.match(/\d+/g) || "1";
    const stepName = headerTitles[step as string];
    return (
        <HeaderContainer justifyContent="space-between">
            <BackHomeButton />
            <HeaderStepName>{stepName}</HeaderStepName>
            <HeaderStepNumber>{step}/3</HeaderStepNumber>
        </HeaderContainer>
    );
};

export default Header;
