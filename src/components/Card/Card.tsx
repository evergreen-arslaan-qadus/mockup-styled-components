import React from 'react'
import {
    StyledCard,
    StyledCardHeader,
    StyledCardContent,
    StyledCardActions,
    StyledHeading,
    StyledSubHeading
} from './Card.styled';

interface IProps {
    heading1: String
    heading2: String
    subheading: String
    button: React.HTMLProps<HTMLButtonElement>
    children: Array<React.ReactNode> | React.ReactNode
}

const Card = ({ heading1, heading2, subheading, button, children }: IProps) => {
    return (
        <StyledCard>
            <StyledCardHeader>
                <StyledHeading>
                    {heading1}
                </StyledHeading>
                <StyledHeading>
                    {heading2}
                </StyledHeading>
                <StyledSubHeading>
                    {subheading}
                </StyledSubHeading>
            </StyledCardHeader>
            <hr />
            <StyledCardContent>
                {children}
            </StyledCardContent>
            <hr />
            <StyledCardActions>
                {button}
            </StyledCardActions>
        </StyledCard >
    )
}

export default Card
