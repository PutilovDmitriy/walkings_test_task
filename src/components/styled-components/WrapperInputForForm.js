import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => props.marginTop || "22px"};
`;