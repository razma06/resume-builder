import styled from "styled-components";

export const PageNavButtonStyled = styled.button`
    padding-inline: 35px;
    height: 3rem;
    border-radius: 4px;
    font-size: 1rem;
    color: white;
    background-color: var(--navigation-button);
    transition-duration: 300ms;

    &:hover {
        background-color: #7949ff;
    }

    &:active {
        background-color: #512faf;
    }
`;
