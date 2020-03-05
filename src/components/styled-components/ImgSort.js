import styled from 'styled-components';

export default styled.img`
    transform: ${props => props.transform ? "rotate(180deg)" : "rotate(0deg)"};
    opacity: ${props => (props.opacity === null) ? "0.3" : "1"};
    width: 14px;
    height: 14px;
    margin: 2px 0 -3px 5px;
`;