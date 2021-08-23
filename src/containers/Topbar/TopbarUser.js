import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Popover from "../../components/uielements/popover";
import IntlMessages from "../../components/utility/intlMessages";
import userpic from "../../assets/images/User.png";
import { Auth } from "../../service/Auth";
import TopbarDropdownWrapper from "./TopbarDropdown.styles";
import { ArrowDownIcon,Divider } from "../../assets/Icons";

// const { logout } = authAction;

export default function TopbarUser() {
  const [visible, setVisibility] = React.useState(false);
  function handleVisibleChange() {
    setVisibility((visible) => !visible);
  }

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
    <div className=" ">
      
        {/* <div className="col-12 mt-2 mr-0">
              
                Jones Ferdinand 
              
          </div>
          <div className="col-">
            <img src={userpic} height="40" width="40" className="rounded-circle" alt="user"/>
          </div> */}
        
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
                <span>Jones Ferdinand</span>
                <a className="text-primary mt-0">Not you?</a>{" "}
              </span>
            </div>
            <div className="col-1 p-0">
              <span>
                <a>
                  <img
                    src={userpic}
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
