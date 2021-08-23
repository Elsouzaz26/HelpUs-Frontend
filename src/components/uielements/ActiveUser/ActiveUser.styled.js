import styled from "styled-components";
const ActiveUserWrapper = styled.div`

    border-bottom: 3px solid #f1f3f6;
    padding: 30px;
    @media screen and (max-width: 992px) {
        padding: 10px;
    } 

    .backIcon {
        display: none;
        @media screen and (max-width: 992px) {
            display: inline;
        } 
        
    }
`;

export default ActiveUserWrapper;
