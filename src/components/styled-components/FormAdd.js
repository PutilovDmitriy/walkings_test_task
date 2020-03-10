import styled from 'styled-components';

export default styled.div`
    position: sticky;
    height: 160px;
    bottom: 0;
    margin-top: ${props => props.marginTop || "0"};
    background-color: rebeccapurple;    
`;