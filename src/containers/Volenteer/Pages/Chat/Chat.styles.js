import styled from "styled-components";
import { palette } from "styled-theme";

const ViewWrapper = styled.div`

  .overflow-hide div{
    overflow-x: hidden
  }

  
  .paper {
    width: 100%;
    border-radius : 18px !important
  }

  .flex-item {
    display: flex;
    align-items: center;
    flex-direction: inherit
  }

  .border-right {
    border-right: 3px solid #f1f3f6 !important
  }

  .active-user-image {
    height: 70px;
    width: 70px;
    border-radius: 10px
  }

  .chat-side {
    height: 100%;
  }

   .user-list {
     height: calc(100% - 100px);
     overflow: auto;
     @media screen and (max-width: 992px) {
      height: 100% !important
    }
   }

  .message-box {
    height: calc(100% - 230px);
    overflow-x: hidden;
    overflow-y: auto;
    border-bottom: 3px solid #f1f3f6
  }

  .display-inline {
    display: inline
  }

  .message-input {
    border: 0px !important;
  }

  .br-15 {
    border-radius: 15px;
  }

  .hide {
    display: none
  }

  .send-box {
    position: absolute;
    width: 97%;
  }

  .send-box input:focus {
    box-shadow: none !important;
  } 

  .flex {
    display: inline-flex;
    flex-direction: column;
    vertical-align: top;
  }

  .message-container  {
    min-height: 75vh;
    max-height: 75vh;
    height: 75vh;
    overflow: hidden;
  }


  .chat-container {
    overflow: auto;
    height: calc(100% - 100px);
    @media screen and (max-width: 992px) {
      width: 100% !important
    }
  }
`;

export { ViewWrapper };