import { PageNavButtonStyled } from "./PageNavButton.styled";

const PagebackButton = ({ children }: { children: string }) => {
    return <PageNavButtonStyled>{children}</PageNavButtonStyled>;
};

export default PagebackButton;
