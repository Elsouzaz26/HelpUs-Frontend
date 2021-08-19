/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";

// import { Form, Input, Button, Checkbox, PageHeader, message } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Auth } from "../../../service/Auth";

import { useDispatch, useSelector } from "react-redux";
import IntlMessages from "../../../components/utility/intlMessages";
import LogInWrapper from "./LoginIn.styles";
import bgImage from "../../../assets/images/Helpus.png";
import topRect from "../../../assets/images/TopRect.png"
import { LockIcon, LetterIcon } from "../../../assets/Icons";

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 6,
//     span: 16,
//   },
// };

const LoginPage = () => {
  // const [form] = Form.useForm();
  // const onFinish = (values) => {
  //   // window.location = '/dashboard';
  //   Auth.login(values).then(() => {
  //     if (Auth.authenticated()) {
  //       window.location = "/dashboard";
  //     } else {
  //       form.resetFields();
  //       message.error(
  //         "Check your credentials and network connection then try again"
  //       );
  //     }
  //   });
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

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
                <input class="form-control py-2 border-left-0 border" type="text"  placeholder="ridho.tijan@gmail.com"/>
                </div>

                <div className="input-group mb-4 ">
                  <span className="input-group-prepend">
                  <div class="input-group-text bgIcon border-right-0">{LockIcon}</div>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                  />
                </div>
          

                {/* <div className="input-group mb-4">
                  <div className="clear-fix w-100">
                    <span className="float-left">
                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" />{" "}
                          Remember me
                        </label>
                      </div>
                    </span>
                    <span className="float-right">
                      <a href="/forgotpassword" style={{ color: "black" }}>
                        <b>Forgot password?</b>
                      </a>
                    </span>
                  </div>
                </div> */}

                <div className="col-12 mt-4">
                  <a
                    type="button"
                    href="/Home"
                    className="btn badge-pill w-100 signL text-white "
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

    //  <div className="isoLoginContentWrapper">
    //   <div className="isoLoginContent">
    //     <div className="isoLogoWrapper">
    //       <Link to="/dashboard">
    //         <IntlMessages id="page.signInTitle" />
    //       </Link>
    //     </div>
    //     <div className="isoSignInForm">
    //       <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
    //         <Form.Item
    //           name="username"
    //           rules={[
    //             {
    //               required: true,
    //             },
    //           ]}
    //         >
    //           <Input
    //             prefix={<UserOutlined style={{ fontSize: 13 }} />}
    //             size="large"
    //             placeholder="Username"
    //             autoComplete="true"
    //           />
    //         </Form.Item>

    //         <Form.Item
    //           name="password"
    //           rules={[
    //             {
    //               required: true,
    //             },
    //           ]}
    //         >
    //           <Input.Password
    //             prefix={<LockOutlined style={{ fontSize: 13 }} />}
    //             size="large"
    //             placeholder="password"
    //             autoComplete="false"
    //           />
    //         </Form.Item>

    //         <Form.Item name="remember" valuePropName="checked">
    //           <Checkbox>Remember me</Checkbox>
    //           <Link to="/forgotpassword" className="isoForgotPass">
    //             <IntlMessages id="page.signInForgotPass" />
    //           </Link>
    //         </Form.Item>
    //         <Form.Item {...tailLayout}>
    //           <Button type="primary" htmlType="submit">
    //             <IntlMessages id="page.signInButton" />
    //           </Button>
    //         </Form.Item>
    //       </Form>
    //       <div className="isoCenterComponent isoHelperWrapper">
    //         <Link to="/signup">
    //           <IntlMessages id="page.signInCreateAccount" />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}
  );
};

export default LoginPage;
