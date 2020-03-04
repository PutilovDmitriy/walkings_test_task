import styled from 'styled-components';

export default styled.div`
    flex: auto;
    padding-top: 5px;
    height: 100%;
    text-align: ${props => props.textAlign || "left"};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`;