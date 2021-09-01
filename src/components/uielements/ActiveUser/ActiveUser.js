import React from "react";
import ActiveUserWrapper from "./ActiveUser.styled";
import Frame from "../../../assets/images/Frame.png"
import { useDispatch, useSelector } from "react-redux";
import { BackIcon } from "../../../assets/Icons";
import Male from "../../../assets/images/male-avatar.png"
import Female from "../../../assets/images/female-avatar.png"

export default function ActiveUser({user,onBack}) {

  return (
    <ActiveUserWrapper>
     <span className="mr-2 backIcon" onClick={onBack}>
        {BackIcon} 
    </span>
    <span>
        <img className="active-user-image" src={(user ? user.gender === "male" ?Male : Female : Male ) }/>
      </span>
      <span className="ml-2 flex">
        <h4 >{user ? user.fullName: ""}</h4>
        <span>{user.role}</span>
      </span>
    </ActiveUserWrapper>
  );
}
