import styled from "styled-components";

interface FlexProps {
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    flexWrap?: string;
    width?: string;
    height?: string;
    minHeight?: string;
    columnGap?: string;
    rowGap?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || "row"};
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    flex-wrap: ${(props) => props.flexWrap || "nowrap"};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    min-height: ${(props) => props.minHeight || "auto"};
    column-gap: ${(props) => props.columnGap || "0"};
    row-gap: ${(props) => props.rowGap || "0"};
`;
