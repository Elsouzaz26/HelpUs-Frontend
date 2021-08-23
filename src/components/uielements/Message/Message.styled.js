import styled from "styled-components";
const MessagePageWrapper = styled.div`

   padding: 10px;

   .flex-reverse {
        display: flex;
        flex-direction: column-reverse;
    }

    .mx-40 {
        width: calc(100% - 40px)
    } 

    .me-message {
        background:  rgba(10, 102, 194, 0.1);
        border-radius: 10px 10px 0px 10px;
        padding: 10px;
    }

    .user-message {
        background:  #F5F5F5;
        border-radius: 10px 10px 0px 10px;
        padding: 10px;
    }

    .user-image {
        height: 30px;
        width: 30px;
        border-radius: 10px;
    }
`;

export default MessagePageWrapper;
