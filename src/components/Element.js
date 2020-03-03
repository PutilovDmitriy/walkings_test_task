import styled from 'styled-components';

export default styled.div`
    font-size: 10px;
    height: ${props => props.hight || "580px" };
    float: ${props => props.float || "left" };
    margin-left: ${props => props.marginLeft || "0" };
    margin-right: ${props => props.marginRight || "10px" };
    vertical-align: ${props => props.verticalAlign || "center" };

`;
