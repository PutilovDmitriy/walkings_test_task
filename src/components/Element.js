import styled from 'styled-components';

export default styled.div`
    height: 580px;
    float: ${props => props.float || "none" };
    vertical-align: center;
`;
