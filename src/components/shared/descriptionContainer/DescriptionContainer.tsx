import React from "react";
import {
    DescriptionContainer,
    DescriptionDate,
    DescriptionDetailContainer,
    DescriptionDetailTitle,
    DescriptionText,
    DescriptionTitle,
} from "./DescriptionContainer.styled";
import { BreakingLine } from "@/components/shared/resume/Resume.styled";

interface DescriptionProps {
    title: string;
    descriptionText: string;
    detailTitle?: string;
    stratDate?: string;
    endDate?: string;
    style?: React.CSSProperties;
    wantTitle?: boolean;
    wantLine?: boolean;
}

const Description: React.FC<DescriptionProps> = ({
    descriptionText,
    detailTitle,
    endDate,
    stratDate,
    title,
    style,
    wantTitle = true,
    wantLine,
}) => {
    return (
        <>
            {wantLine && <BreakingLine />}
            <DescriptionContainer style={style}>
                {wantTitle && <DescriptionTitle>{title}</DescriptionTitle>}
                {!!detailTitle && (
                    <DescriptionDetailContainer>
                        <>
                            <DescriptionDetailTitle>
                                {detailTitle}
                            </DescriptionDetailTitle>
                            <DescriptionDate>
                                {endDate && stratDate
                                    ? `${stratDate}-${endDate}`
                                    : stratDate || endDate}
                            </DescriptionDate>
                        </>
                    </DescriptionDetailContainer>
                )}
                <DescriptionText>{descriptionText}</DescriptionText>
            </DescriptionContainer>
        </>
    );
};

export default Description;
