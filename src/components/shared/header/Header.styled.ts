import { Flex } from "@/components/library/Flex.styled";
import styled from "styled-components";

export const HeaderContainer = styled(Flex)`
    border-bottom: 2px solid var(--heading);
    padding-bottom: 0.75rem;
    margin-bottom: 77px;
    /* position: relative; */
`;

export const HeaderStepName = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--heading);
`;

export const HeaderStepNumber = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--heading);
`;
