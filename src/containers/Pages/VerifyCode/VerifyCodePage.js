import React from "react";
import VerifyCodePageWrapper from "./VerifyCodePage.styles";
import { BackIcon1 } from "../../../assets/Icons";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/images/amico.jpg";
import OtpInput from "react-otp-input";

const VerifyCodePage = () => {
  return (
    <VerifyCodePageWrapper>
      <div className="container-fluid">
        <div className="sideCol">
          <div className="col-12">
            <h2>MBK Controls</h2>
            <a href="/forgotpassword" className="ml-5">
              <span>{BackIcon1}</span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img className="amicoImg" src={bgImage} alt="amicopic" />
            <h2 className="text-center">Verification Code</h2>
            <p>Please Enter your OTP sent to your Mobile Number</p>
            <div className="text-center">
              <OtpInput
                numInputs={4}
                separator={<span> - </span>}
                containerStyle="oiCheck"
                value={"7___"}
                inputStyle="ioCheck"
              />
            </div>
            <p className="mt-2">
              Didn't Received OTP Code? <a href="#">Resend OTP</a>
            </p>
            <a className="btn btn-primary" href="/resetpassword">
              Verify
            </a>
          </div>
        </div>
      </div>
    </VerifyCodePageWrapper>
  );
};

export default VerifyCodePage;
