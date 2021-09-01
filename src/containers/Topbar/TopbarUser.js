import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Popover from "../../components/uielements/popover";
import IntlMessages from "../../components/utility/intlMessages";
// import userpic from "../../assets/images/User.png";
import { Auth } from "../../service/Auth";
import TopbarDropdownWrapper from "./TopbarDropdown.styles";
import { ArrowDownIcon,Divider } from "../../assets/Icons";
import { useSelector } from "react-redux";
import user, { userSelector } from "../../redux/user";
import { useState } from "react";
import { useEffect } from "react";
import Male from "../../assets/images/male-avatar.png"
import Female from "../../assets/images/female-avatar.png"

// const { logout } = authAction;

export default function TopbarUser() {
  const [visible, setVisibility] = React.useState(false);
  function handleVisibleChange() {
    setVisibility((visible) => !visible);
  }
  const {user} = useSelector(userSelector)



  

  const content = (
    <TopbarDropdownWrapper className="isoUserDropdown">
      <Link className="isoDropdownLink" to={"/dashboard/my-profile"}>
        <IntlMessages id="topbar.myprofile" />
      </Link>
      {/* <a className="isoDropdownLink" href="# ">
        <IntlMessages id="themeSwitcher.settings" />
      </a>
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="sidebar.feedback" />
      </a> */}
      <a className="isoDropdownLink" href="# ">
        <IntlMessages id="topbar.help" />
      </a>
      <a className="isoDropdownLink" onClick={Auth.logout.bind(this)} href="# ">
        <IntlMessages id="topbar.logout" />
      </a>
    </TopbarDropdownWrapper>
  );

  return (
    <div className="">
       
          <div className="row">
            <div className="col-11 ">
              <span className="p-2">{Divider}</span>
              <span 
              
                className="float-right"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#252733",
                  fontWeight: "600",
                }}
              >
                <span>{user ? user.fullName: ""}</span>
                <span >
                <a className="text-primary mt-0"  onClick={ 
                      (e) => {
                        e.preventDefault()
                        console.log('ooo')
                        Auth.logout()
                      }
                    }> Not you?</a>{" "}
                </span>
              </span>
            </div>
            <div className="col-1 p-0">
              <span>
                <a>
                  <img
                    src={(user ? user.gender === "male" ?Male : Female  : Male ) }
                    height="40"
                    width="40"
                    className="rounded-circle border border-5"
                    alt="user"
                  />
                </a>
              </span>
            </div>
          </div>
     
     
    </div>
  );
}
