import React from "react";
import ChangePasswordWrapper from "./ChangePasswordPage.styles";
import bgImage from "../../../assets/images/ChangePassword.png";
import { BackIcon1 } from "../../../assets/Icons";
const ChangePassword = () => {
  return (
    <ChangePasswordWrapper>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-6 left-side">
            <img
              className="w-100 loginImage"
              src={bgImage}
              alt="ChangePasssword_Image"
            />
          </div>
          <div className="col-md-6 right-side">
            <div className="container">
              <div className="mb-5">
                <h2 className="mb-5 text-center">MKB Controls</h2>
                <a href="/#">
                  <span>{BackIcon1}</span>
                </a>
                <form class="mt-5">
                  <label>
                    <b>Current Password</b> <span className="star">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Password"
                      required
                    ></input>
                  </div>
                  <br></br>
                  <label>
                    <b>New Password</b> <span className="star">*</span>
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
                  <div className="button-container text-center mt-10">
                    <a type="button" href="/#" className="btn btn-primary">
                      Apply
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChangePasswordWrapper>
  );
};
export default ChangePassword;
