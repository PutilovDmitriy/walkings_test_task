import styled from 'styled-components';

export default styled.header`
    font-family: 'PT Sans Caption', sans-serif;
    position: relative;
    top: inherit;
    padding: 0;
    margin: 0;
    margin-bottom: ${props => props.marginBottom || "40px"};
    background: ${props => props.invert ? "#FFFFFF" : "#1C2025"};
    color: ${props => props.invert ? "#1C2025" : "#FFFFFF"};
    width: 100% ;
    height: 40px;
`;