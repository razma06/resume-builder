import styled from "styled-components";

export const DescriptionContainer = styled.div`
    display: flex;
    row-gap: 15px;
    flex-direction: column;
`;

export const DescriptionTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: var(--primary);
`;

export const DescriptionText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: black;
    line-height: 22px;
    word-break: break-all;
`;

export const DescriptionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const DescriptionDetailTitle = styled.h4`
    font-size: 16px;
    color: var(--heading);
`;

export const DescriptionDate = styled.p`
    margin-top: 10px;
    font-size: 14px;
    color: #909090;
    font-style: italic;
`;
