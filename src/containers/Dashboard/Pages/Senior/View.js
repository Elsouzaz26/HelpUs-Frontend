import React from "react";
import { MeterWrapper } from "./View.styles";
import TopbarUser from "../../../Topbar/TopbarUser";
import userpic from "../../../../assets/images/User.png"

export default function () {
  return (
    <MeterWrapper>
      <div className="container-fluid ">
        <div class="bg-transparent clearfix mt-0">
          <span class=" float-left col-6">
            {" "}
            <h4>
              Senior{" "}
              <a class="btn badge badge-pill badge-info">Add new Volenteer</a>
            </h4>{" "}
          </span>
          <span class=" float-right">
            <TopbarUser />
          </span>
        </div>
      <div className="card">
    
      <table class="table table-borderless">
        
  <thead>
  
    <tr>
      
   
      <th scope="col">Name</th>
          
     
     
     
     <th scope="col">City</th>
    <th scope="col">Date</th>
    <th scope="col">Assigned to a group?</th>
    </tr>
   
  </thead>
  <tbody className="">
    <tr>
      
      <td> <img src={userpic} height="40" width="40" className="rounded-circle" alt="user"/>      Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <td> <img src={userpic} height="40" width="40" className="rounded-circle" alt="user"/>       Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      
      <td> <img src={userpic} height="40" width="40" className="rounded-circle" alt="user"/>        Larry </td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

      </div>


      </div>


    </MeterWrapper>
  );
}
