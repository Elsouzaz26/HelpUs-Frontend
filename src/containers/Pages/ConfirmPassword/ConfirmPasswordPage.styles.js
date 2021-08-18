import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "../../../library/helpers/rtl";


const ConfirmPasswordPageWrapper = styled.div`
    min-height: 100vh;
    .amicoImg {
        height: 245px!important;
        width: 250px!important;
      }
    .star {
        color: #ED5151;
    }
    .sideCol {
        height: 150px!important;
    }

    
    .ioCheck {
        border: 1px solid #0FAAFF;
        border-radius: 8px;
        background-color: white;

    }
    .container-fluid  {
      min-height: 100vh
    }

    .row  {
      min-height: 100vh
    }

    .col-6  {
      min-height: 100vh
    }

    input {
      background: rgba(196, 196, 196, 0.15);
    }


    .left-side {
      background: rgba(33, 150, 243, 0.1);
      align-items: center;
      display: flex;
      text-align: center;
      justify-content: center;

      
    }


    .right-side {
      padding: 12% 6%;
      
      .mt-10 {
        margin-top: 70px 
      }
      
    }
`;

export default WithDirection(ConfirmPasswordPageWrapper);
