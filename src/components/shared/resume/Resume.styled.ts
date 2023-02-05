import styled from "styled-components";

export const ResumeContainer = styled.aside`
    width: 822px;
    padding: 68px 80px;
    background-color: white;
    min-height: 100vh;

    .title {
        color: var(--primary);
        font-size: 34px;
        font-weight: 700;
        word-spacing: 20px;
        margin-bottom: 17px;
    }

    .small-title {
        color: var(--primary);
        font-size: 18px;
        margin-bottom: 15px;
        margin-top: 24px;
    }

    .description {
        color: black;
        font-size: 1rem;
        font-weight: 400;
        line-height: 22px;
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
    border: 1px solid var(--border);
    width: 100%;
    margin-block: 1rem;
`;
