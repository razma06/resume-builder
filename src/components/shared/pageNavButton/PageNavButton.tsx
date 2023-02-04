import { PageNavButtonStyled } from "./PageNavButton.styled";

const PageNavButton = ({ value }: { value: string }) => {
    return <PageNavButtonStyled as="input" type="submit" value={value} />;
};

export default PageNavButton;
