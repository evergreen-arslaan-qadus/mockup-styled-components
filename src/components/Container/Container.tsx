import React from 'react'
import { StyledContainer } from './Container.styled';

interface IProps {
    children: Array<React.ReactNode> | React.ReactNode
}

const Card = ({ children }: IProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Card
