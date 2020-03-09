import styled from 'styled-components';

export default styled.tr`
    list-style: none;
    text-align: ${props => props.textAlign || "justify" };
    height: 40px;
    padding:0;
    align-items: center;
    background-color: ${props => props.bgColor || "#EFEFF0" };
`;