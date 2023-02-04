import { Link } from "react-router-dom";
import {
    HeaderContainer,
    HeaderStepName,
    HeaderStepNumber,
} from "./Header.styled";
import BackButton from "@/assets/icons/back-button.svg";

interface HeaderProps {
    stepName: string;
    stepNumber: string;
}

const Header: React.FC<HeaderProps> = ({ stepName, stepNumber }) => {
    return (
        <HeaderContainer justifyContent="space-between">
            <Link
                to="/"
                style={{ position: "absolute", left: "65px", top: "45px" }}
            >
                <img src={BackButton} alt="" />
            </Link>
            <HeaderStepName>{stepName}</HeaderStepName>
            <HeaderStepNumber>{stepNumber}</HeaderStepNumber>
        </HeaderContainer>
    );
};

export default Header;
