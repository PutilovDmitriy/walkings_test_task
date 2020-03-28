import styled from 'styled-components';

export default styled.table`
    border-collapse: collapse;  
    width: ${props => props.width || "333px"};
    margin-left: ${props => props.margin || "0"};

`;