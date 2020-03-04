import styled from 'styled-components';

export default styled.footer`
    font-family: 'PT Sans Caption', sans-serif;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    margin-top: 40px;
    background: ${props => props.invert ? "#FFFFFF" : "#1C2025"};
    color: ${props => props.invert ? "#1C2025" : "#FFFFFF"};
    width: 100% ;
    height: 60px;    
`;