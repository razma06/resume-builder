import { PageNavButtonStyled } from "./PageNavButton.styled";

const PageNavButton = ({ children }: { children: string }) => {
    return <PageNavButtonStyled>{children}</PageNavButtonStyled>;
};

export default PageNavButton;
