import styled from 'styled-components';

export default styled.header`
    display: flexbox;
    font-family: 'PT Sans Caption', sans-serif;
    position: relative;
    top: inherit;
    padding: ${props => props.padding || 0};
    margin: ${props => props.margin || 0};
    background: ${props => props.invert ? "#FFFFFF" : "#1C2025"};
    color: ${props => props.invert ? "#1C2025" : "#FFFFFF"};
    width: 100% - 20px;
    height: 40px;
    align-items: center;
`;