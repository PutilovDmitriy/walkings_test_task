import styled from 'styled-components';

export default styled.div`
    font-family: 'PT Sans';
    height: ${props => props.hight || "580px" };
    float: ${props => props.float || "left" };
    vertical-align: ${props => props.verticalAlign || "center" };
`;
