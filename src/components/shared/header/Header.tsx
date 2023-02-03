import {
    HeaderContainer,
    HeaderStepName,
    HeaderStepNumber,
} from "./Header.styled";

interface HeaderProps {
    stepName: string;
    stepNumber: string;
}

const Header: React.FC<HeaderProps> = ({ stepName, stepNumber }) => {
    return (
        <HeaderContainer justifyContent="space-between">
            <HeaderStepName>{stepName}</HeaderStepName>
            <HeaderStepNumber>{stepNumber}</HeaderStepNumber>
        </HeaderContainer>
    );
};

export default Header;
