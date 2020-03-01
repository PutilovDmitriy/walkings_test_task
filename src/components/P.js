import styled from 'styled-components';

export default styled.p`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.fontSize || "9px"};
    line-height: ${props => props.fontHeight|| "12px"};
    margin: 0; 
    color: ${props => props.color};
`;