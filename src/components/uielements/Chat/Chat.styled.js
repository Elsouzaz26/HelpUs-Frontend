import styled from "styled-components";
const ChatPageWrapper = styled.div`

    margin-bottom: 10px;
    cursor: pointer;

    .flex {
        display: inline-flex;
        flex-direction: column;
        vertical-align: top;
    }
    .mx-50 {
        width: calc(100% - 80px)
    } 

    .pad-15 {
        padding: 10px 15px; 
    }

    .user-image {
        height: 60px;
        width: 60px;
        border-radius: 10px;
    }

    .chat-message {
        font-size: 12px;
    }

    .active {
        background: #E7F0F9
    }
`;

export default ChatPageWrapper;
