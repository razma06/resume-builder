import styled from "styled-components";

export const InputFieldContainer = styled.div`
    width: 100%;
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
