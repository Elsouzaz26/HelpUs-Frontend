/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";

import { Auth } from "../../../service/Auth";

import { useDispatch, useSelector } from "react-redux";
import LogInWrapper from "./LoginIn.styles";
import bgImage from "../../../assets/images/Helpus.png";
import topRect from "../../../assets/images/TopRect.png"
import { LockIcon, LetterIcon } from "../../../assets/Icons";
import { User } from "../../../service/User";
import { setUser } from "../../../redux/user";
import { Toast } from "../../../service/Toast";

const LoginPage = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');


  const getEmail = (event) => {
    setEmail(event.target.value);
  }

  const getPassword = (event) => {
    setPassword(event.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      emailAddress,
      password
    }

    let data = await Auth.login(formData)

    if (data.status !== 200) {
      return Toast.fire("error", data.data.msg)
    }

    if (data.user.role == "manager") {
      dispatch(setUser({ user: data.user }))

      window.location.href = '/manager-home'
      
    } else if (data.user.role == "volenteer") {
      dispatch(setUser({ user: data.user }))
      // history.push('/volenteer-home')
      window.location.href = '/volenteer-home'

    }

  }

  return (
    <LogInWrapper>


      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-7  left-side ">
            <div className="margins">
              <img className="loginImage " src={bgImage} alt="Login_Image" />
              <br></br>

              <h1 className="mt-5 w-50 text-white"><b>Help us helping </b></h1>

              <h1 className="w-75  text-white"><b>seniors on your city</b></h1>
              <p className="wp  text-white">Voluntary organizations support the elderly and people with reduced mobility, and provide them with food and medicine in times of distress. </p>
            </div>

          </div>

          <div className="col-md-5  right-side ">
            <div className="">
              <img className="toprect " src={topRect} alt="Login_Image" />
              <h3 className="mt-4 text-white">Join Over 52 Million </h3>
              <h3 className=" text-white"> Volenteer from around the world</h3>

              <p className="mb-5 h6l ">Distribution is organized on a daily basis. The distribution manager is responsible for entering details, creating a group of addresses for efficient distribution,</p>

              <form className="">
                <div class="input-group mb-4 ">
                  <span class="input-group-prepend">
                    <div class="input-group-text bgIcon border-right-0">{LetterIcon}</div>
                  </span>
                  <input
                    class="form-control py-2 border-left-0 border"
                    type="text"
                    placeholder="ridho.tijan@gmail.com"
                    onChange={getEmail}
                    value={emailAddress}
                  />
                </div>

                <div className="input-group mb-4 ">
                  <span className="input-group-prepend">
                    <div class="input-group-text bgIcon border-right-0">{LockIcon}</div>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    onChange={getPassword}
                    value={password}
                  />
                </div>
                <div className="col-12 mt-4">
                  <a
                    type="button"
                    className="btn badge-pill w-100 signL text-white "
                    onClick={onSubmit}
                  >
                    <b>SIGN IN</b>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LogInWrapper>
  );
};

export default LoginPage;
