import styled, { css } from "styled-components";

export const ResumeContainer = styled.aside<{ built?: boolean }>`
    width: 822px;
    padding: 68px 80px 120px 80px;
    background-color: white;
    min-height: min(1080px, 100vh);
    position: relative;
    overflow-y: auto;

    ${({ built }) =>
        built &&
        css`
            margin-inline: auto;
            border: 0.8px solid black;
        `}

    &::after {
        content: "";
        width: 308px;
        height: 320px;
        background-color: white;
        position: absolute;
        top: 0;
        right: 0;
    }

    .title {
        color: var(--primary);
        font-size: 34px;
        font-weight: 700;
        word-spacing: 20px;
        margin-bottom: 20px;
        max-width: 420px;
        word-wrap: break-word;
        word-break: break-word;
    }

    .contact {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 11px;
        p {
            color: var(--heading);
            font-size: 18px;
        }
        img {
            width: 20px;
        }
    }
`;

export const ResumeImage = styled.img`
    width: 246px;
    height: 246px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 48px;
    right: 75px;
    z-index: 10;
    background-color: white;
`;

export const BreakingLine = styled.hr`
    border: none;
    border-bottom: 1px solid var(--border);
    width: 100%;
    margin-block: 2rem 1.625rem;
`;

export const ResumeIcon = styled.img`
    width: 42px;
    position: absolute;
    bottom: 44px;
    left: 78px;
`;
