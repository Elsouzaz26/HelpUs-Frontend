import React from "react";
import { MeterWrapper } from "./index.styles";
import Notes from "../../Notes/Notes"

export default function () {
  
  return (
    <MeterWrapper>
      <div className="container-fluid mb-5">
     <Notes />
      </div>
    </MeterWrapper>
  );
}
