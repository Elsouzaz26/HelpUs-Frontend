import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Popover from "../../components/uielements/popover";
import IntlMessages from "../../components/utility/intlMessages";
import userpic from "../../assets/images/User.png";
import { Auth } from "../../service/Auth";
import TopbarDropdownWrapper from "./TopbarDropdown.styles";
import { ArrowDownIcon } from "../../assets/Icons";

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
        <div className="row">
          <div className="col-12">
            <span>Jones Ferdinand </span>
            <span><a><img src={userpic} height="40" width="40" className="rounded-circle " alt="user"/></a></span>
          </div>
        </div>
      </div>
  );
}
