import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "../../../library/helpers/rtl";


const LogInWrapper = styled.div`
    min-height: 100vh;

  

    .container-fluid  {
      min-height: 100vh
    }

    .row  {
      min-height: 100vh
    }

    .col-6  {
      min-height: 100vh;
      

    }

    input {
      background:  rgba(42, 46, 69, 1);
      border: 2px solid rgba(123, 67, 245, 1)!important
    }

    .left-side {
      background: #7B43F5;
     
   

      .loginImage {
        height: 182px;
        max-width: 197px;
      }

      @media only screen and (max-width: 768px) {
        display: none
      }
    }
 .wp {
   width: 350px;
   font-weight: 400;
   font-size :18px
 }

    .right-side {
      padding: 6%;
      background: #040824;
      .mt-10 {
       
      }
      
    }

.margins {
  
margin-left:100px;
padding-top:50px

}  
.h6l {
color: rgba(167, 176, 235, 1);

}


.toprect {
  width: 46px;
height: 5px;
}

.signL {
  background: linear-gradient(90deg, #D945FC 0%, #E54880 100%);
}


.form-control:focus {
  outline: 0 !important;
  border-color: initial;
  box-shadow: none;
}

.bgIcon {
  background:  rgba(42, 46, 69, 1)!important; 
  border: 2px solid rgba(123, 67, 245, 1)

  

}
`;

export default WithDirection(LogInWrapper);



// width: 100%;
//   min-height: 100vh;
//   height: 100vh;
//   display: flex;
//   position: relative;
//   /* background: url(${bgImage}) no-repeat center center; */
//    /* background: #ffffff;  */
//   background-size: cover;

//   &:before {
//     content: "";
//     width: 100%;
//     height: 100%;
//     display: flex;
//     /* background-color: rgba(0, 0, 0, 0.6); */
//     position: absolute;
//     z-index: 1;
//     top: 0;
//     left: ${(props) => (props["data-rtl"] === "rtl" ? "inherit" : "0")};
//     right: ${(props) => (props["data-rtl"] === "rtl" ? "0" : "inherit")};
//   }

//   .isoLoginContentWrapper {
//     width: 500px;
//     height: 100%;
//     overflow-y: auto;
//     z-index: 10;
//     position: relative;
//   }

//   .isoLoginContent {
//     min-height: 100%;
//     display: flex;
//     flex-direction: column;
//     padding: 70px 50px;
//     position: relative;
//     background-color: #ffffff;

//     @media only screen and (max-width: 767px) {
//       width: 100%;
//       padding: 70px 20px;
//     }

//     .isoLogoWrapper {
//       width: 100%;
//       display: flex;
//       margin-bottom: 50px;
//       justify-content: center;
//       flex-shrink: 0;

//       a {
//         font-size: 24px;
//         font-weight: 300;
//         line-height: 1;
//         text-transform: uppercase;
//         color: ${palette("secondary", 2)};
//       }
//     }

//     .isoSignInForm {
//       width: 100%;
//       display: flex;
//       flex-shrink: 0;
//       flex-direction: column;
//       /* border: 0.5px solid ${palette("border", 2)}; */
      
//       .isoInputWrapper {
//         margin-bottom: 15px;

//         &:last-of-type {
//           margin-bottom: 0;
//         }

//         input {
//           &::-webkit-input-placeholder {
//             color: ${palette("grayscale", 0)};
//           }

//           &:-moz-placeholder {
//             color: ${palette("grayscale", 0)};
//           }

//           &::-moz-placeholder {
//             color: ${palette("grayscale", 0)};
//           }
//           &:-ms-input-placeholder {
//             color: ${palette("grayscale", 0)};
//           }
//         }
//       }

//       .isoHelperText {
//         font-size: 12px;
//         font-weight: 400;
//         line-height: 1.2;
//         color: ${palette("grayscale", 1)};
//         padding-left: ${(props) =>
//           props["data-rtl"] === "rtl" ? "inherit" : "13px"};
//         padding-right: ${(props) =>
//           props["data-rtl"] === "rtl" ? "13px" : "inherit"};
//         margin: 15px 0;
//         position: relative;
//         display: flex;
//         align-items: center;

//         &:before {
//           content: "*";
//           color: ${palette("error", 0)};
//           padding-right: 3px;
//           font-size: 14px;
//           line-height: 1;
//           position: absolute;
//           top: 2px;
//           left: ${(props) => (props["data-rtl"] === "rtl" ? "inherit" : "0")};
//           right: ${(props) => (props["data-rtl"] === "rtl" ? "0" : "inherit")};
//         }
//       }

//       .isoHelperWrapper {
//         margin-top: 35px;
//         flex-direction: column;
//       }

//       .isoOtherLogin {
//         padding-top: 40px;
//         margin-top: 35px;
//         border-top: 1px dashed ${palette("grayscale", 2)};

//         > a {
//           display: flex;
//           margin-bottom: 10px;

//           &:last-child {
//             margin-bottom: 0;
//           }
//         }

//         button {
//           width: 100%;
//           height: 42px;
//           border: 0;
//           font-weight: 500;

//           &.btnFacebook {
//             background-color: #3b5998;

//             &:hover {
//               background-color: darken(#3b5998, 5%);
//             }
//           }

//           &.btnGooglePlus {
//             background-color: #dd4b39;
//             margin-top: 15px;

//             &:hover {
//               background-color: darken(#dd4b39, 5%);
//             }
//           }

//           &.btnAuthZero {
//             background-color: #e14615;
//             margin-top: 15px;

//             &:hover {
//               background-color: darken(#e14615, 5%);
//             }
//           }

//           &.btnFirebase {
//             background-color: ${palette("color", 5)};
//             margin-top: 15px;

//             &:hover {
//               background-color: ${palette("color", 6)};
//             }
//           }

//           &.btnAccountKit {
//             ${"" /* background-color: rgb(150, 189, 235); */}
//             margin-top: 15px;

//             &:hover {
//               ${"" /* background-color: ${palette('color', 6)}; */}
//             }
//           }
//         }
//       }

//       .isoForgotPass {
//         font-size: 12px;
//         color: ${palette("text", 2)};
//         margin-bottom: 10px;
//         text-decoration: none;
//         float: right;
//         &:hover {
//           color: ${palette("primary", 2)};
//         }
//       }

//       button {
//         font-weight: 500;
//         width:50%
//       }
//     }
//   }