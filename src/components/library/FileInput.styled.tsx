import styled from "styled-components";

export const FileInputStyled = styled.input`
    & {
        color: transparent;
        display: flex;
        width: 107px;
        height: 27px;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    &::-webkit-file-upload-button {
        visibility: hidden;
    }

    &::before {
        content: "ატვირთვა";
        width: 107px;
        height: 27px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--upload-button);
        border-radius: 4px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
    }
`;
