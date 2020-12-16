import styled from 'styled-components';

export const StyledCard = styled.div`
    height: 500px;
    width: 300px;
    border-radius: 10px;
    border: 1px solid gray;
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 48px;
`;

export const StyledHeading = styled.h1`
    line-height: 30px;
    margin: 10px 0px;
`;

export const StyledSubHeading = styled.div`
    color: grey;
    padding: 16px 0px;
`;

export const StyledCardHeader = styled.div`

`;

export const StyledCardContent = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
`;

export const StyledCardActions = styled.div`
    padding-top: 16px;
`;