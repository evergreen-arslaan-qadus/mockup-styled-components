import React from 'react'
import styled from 'styled-components';

const StyledTypography = styled.span<IProps>`
    color: ${({ variant }) => variant === "contentHeader" ? "grey" : "black"};
    margin: ${({ variant }) => variant === "contentHeader" ? "36px 0px 16px 0px" : "5px 0px"};
    font-size: 24px;
    max-height: 24px;
    min-width: 100%;
`;

interface IProps {
    children: any
    variant?: String
}

const Typography = (props: IProps) => {
    const { children } = props;
    return (
        <StyledTypography {...props}>
            {children}
        </StyledTypography>
    )
}

export default Typography
