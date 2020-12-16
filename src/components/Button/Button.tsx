import React from 'react'
import { StyledButton } from './Button.styled';

interface IProps {
    children: React.ReactNode
}

const Button = ({ children }: IProps) => {
    return (
        <StyledButton type="button">
            {children}
        </StyledButton>
    )
}

export default Button
