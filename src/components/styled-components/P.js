import styled from 'styled-components';

export default styled.p`
    display: ${props => props.display || ""};
    font-style: normal;
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "9px"};
    line-height: ${props => props.fontHeight|| "12px"};
    margin: ${props => props.margin || "0"}; 
    color: ${props => props.color};
    max-width: ${props => props.maxWidth || ''};
    text-overflow: ellipsis;
`;