import React from "react";
import { MeterWrapper } from "./View.styles";
import TopbarUser from "../../../Topbar/TopbarUser";
import userpic from "../../../../assets/images/User.png";
import { Popover } from "antd";
import { MoreOutlinedBlack } from "../../../../assets/Icons";
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
          <table class="table  table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>

                <th scope="col">City</th>
                <th scope="col">Date</th>
                <th scope="col">Assigned to a group?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <img
                    src={userpic}
                    height="40"
                    width="40"
                    className="rounded-circle"
                    alt="user"
                  />{" "}
                  Mark
                </td>
                <td>Raanana</td>
                <td>May 26, 2019 </td>
                <td>
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-danger">NO</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <img
                    src={userpic}
                    height="40"
                    width="40"
                    className="rounded-circle"
                    alt="user"
                  />{" "}
                  Mark
                </td>
                <td>Raanana</td>
                <td>May 26, 2019 </td>
                <td className="w-25">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-danger">NO</span>
                  </span>
                  <span className="float-right"><Popover placement="bottomRight">{MoreOutlinedBlack}</Popover></span>
                  
                  {/* <div class="bg-info clearfix">
  <span  class="float-left badge badge-pill badge-danger">NO</span>
  <span  class=" float-right"><Popover
                 
                 placement="bottomRight"
               >
                 {MoreOutlinedBlack}
               </Popover></span>
</div> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MeterWrapper>
  );
}
