import styled from 'styled-components';

export default styled.th`
    display: inline-flexbox;
    text-align: ${props => props.textAlign || "left"};
    min-width: ${props => props.minWidth || "41%" };
    margin: ${props => props.margin || "8px 0" };
    margin-left: ${props => props.marginLeft || "0px"};
    padding: 0;    
    align-items: center;
    vertical-align: middle; 
`;