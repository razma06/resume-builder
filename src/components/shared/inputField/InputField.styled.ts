import styled, { css } from "styled-components";

interface InputProps {
    isError?: boolean;
    isSuccess?: boolean;
}

export const InputFieldContainer = styled.div<InputProps>`
    width: 100%;

    ${(props) =>
        props.isError &&
        css`
            input,
            textarea {
                border: 1px solid var(--error);
                &:focus {
                    outline: 1px solid var(--error);
                }
            }
            label {
                color: var(--error);
            }
        `}
    ${(props) =>
        props.isSuccess &&
        css`
            input,
            textarea {
                border: 1px solid var(--success);

                &:focus {
                    outline: 1px solid var(--success);
                }
            }
        `}
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    font-size: 1rem;
    padding-inline: 1rem;
    color: var(--label);
    border: 1px solid var(--border);
    background-color: white;
    margin-block: 8px;
    &::placeholder {
        color: var(--placeholder);
    }

    &:focus {
        outline: 1px solid var(--border);
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 100%;

    img {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(0, -50%);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.725rem 1rem;
    color: var(--label);
    border: 1px solid var(--border);
    background-color: white;
    margin-block: 8px;
    resize: none;
    &::placeholder {
        color: var(--placeholder);
    }
    &:focus {
        outline: 1px solid var(--border);
    }
`;

export const InputFieldLabel = styled.label`
    display: block;
    font-size: 1rem;
    font-weight: 500;
    color: var(--label);
`;

export const InputFieldHint = styled.p`
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--secondary);
`;

export const ErrorImage = styled.img`
    right: -12px;
    translate: translate(0, -50%);
`;

export const SuccessImage = styled.img``;
