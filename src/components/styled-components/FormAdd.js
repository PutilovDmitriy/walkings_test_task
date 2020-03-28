import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    height: 160px;
    width: 100%;
    bottom: 0;
    margin: 0;
    margin-top: ${props => props.marginTop || "0"};
    background-color: #EFEFF0;
    border: 3px solid #1C2025;
    box-sizing: border-box;
`;