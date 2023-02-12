import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    .homebg {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: center;
    }
`;

export const Header = styled.header`
    width: 92.7%;
    margin: 0 auto;
    padding-block: 1.5625rem;
    border-bottom: 3px solid var(--header-border);
    background: transparent;
    z-index: 10;
    position: relative;
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
    font-weight: medium;
    z-index: 1;
`;

export const HomeButtonLogo = styled.img`
    width: 299px;
    height: 299px;
    left: 56%;
    bottom: 28%;
    position: absolute;
    pointer-events: none;
`;
