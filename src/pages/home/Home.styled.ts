import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    img {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const Header = styled.header`
    width: 92.7%;
    margin: 0 auto;
    padding-block: 1.5625rem;
    border-bottom: 3px solid var(--header-border);
`;

export const HomeButton = styled.button`
    height: 60px;
    width: 464px;
    border-radius: 8px;
    background-color: var(--home-button);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
`;
