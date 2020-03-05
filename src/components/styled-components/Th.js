import styled from 'styled-components';

export default styled.th`
    display: inline-block;
    text-align: ${props => props.textAlign || "left"};
    min-width: ${props => props.minWidth || "41%" };
    margin: ${props => props.margin || "8px 0" };
    margin-left: ${props => props.marginLeft || "6px"};
    padding: 0;    
    vertical-align: middle; 
`;