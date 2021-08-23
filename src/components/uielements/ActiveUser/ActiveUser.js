import React from "react";
import ActiveUserWrapper from "./ActiveUser.styled";
import Frame from "../../../assets/images/Frame.png"
import { BackIcon } from "../../../assets/Icons";

export default function ActiveUser({user,  onBack}) {

  return (
    <ActiveUserWrapper>
     <span className="mr-2 backIcon" onClick={onBack}>
        {BackIcon} 
    </span> 
     <span>
        <img className="active-user-image" src={Frame}/>
      </span>
      <span className="ml-2 flex">
        <h4 >Nik</h4>
        <span>Group Leader of "group Name"</span>
      </span>
    </ActiveUserWrapper>
  );
}
