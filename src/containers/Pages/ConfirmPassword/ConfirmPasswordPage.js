import React from "react";
import ConfirmPasswordPageWrapper from "./ConfirmPasswordPage.styles";
import { BackIcon1 } from "../../../assets/Icons";

const ConfirmPasswordPage = () => {
  return (
    <ConfirmPasswordPageWrapper>
      <div className="container-fluid">
        <div className="sideCol">
          <div className="col-12">
            <h2>MBK Controls</h2>
            <a href="/forgotpassword" className="ml-5">
              <span>{BackIcon1}</span>
            </a>
          </div>
        </div>
        <div className="row ">
          <div class="col-md-3 col-lg-4"></div>
          <div className="col-md-6 col-lg-4">
            <h2>Add New Password</h2>
            <form class="mt-5">
              <label>
                <b>Password</b> <span className="star">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Password"
                ></input>
              </div>
              <p>
                Password must contain at least
                <br />
                One Capital Letter,
                <br />
                Small Letter,
                <br />
                One Digit
              </p>
              <label>
                <b>Confirm Password</b> <span className="star">*</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Confirm Password"
                ></input>
              </div>
            </form>
            <a className="btn btn-primary mt-3" href="/doneresetpassword">
              Confirm
            </a>
          </div>
          <div class="col-md-3 col-lg-4"></div>
        </div>
      </div>
    </ConfirmPasswordPageWrapper>
  );
};

export default ConfirmPasswordPage;
