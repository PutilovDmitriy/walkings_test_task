import styled from 'styled-components';

export default styled.div`
    font-size: ${props => props.fontSize || "10px"};
    height: ${props => props.hight || "580px" };
    float: ${props => props.float || "left" };
    margin-left: ${props => props.marginLeft || "0" };
    margin-right: ${props => props.marginRight || "10px" };
    vertical-align: ${props => props.verticalAlign || "center" };
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35);
`;
