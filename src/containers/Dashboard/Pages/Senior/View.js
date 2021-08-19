import React from "react";
import { ViewWrapper } from "./View.styles";
import TopbarUser from "../../../Topbar/TopbarUser";
import userpic from "../../../../assets/images/User.png";
import { Popover } from "antd";
import { MoreOutlinedBlack, Sort, Filter } from "../../../../assets/Icons";
import { TableFooter } from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
export default function () {

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


  return (
    <ViewWrapper>
      <div className="container-fluid ">
        <div class="bg-transparent clearfix mt-0">
          <span class=" float-left col-6">
            {" "}
            <h4>
              Senior{" "}
              <a class="btn badge badge-pill badge-primary">
                Add new Volenteer
              </a>
            </h4>{" "}
          </span>
          <span class=" float-right">
            <TopbarUser />
          </span>
        </div>
        <div className="card mt-5">
          <div class=" clearfix p-3 mb-5">
            <span class="float-left">
              <h5>All Seniors</h5>
            </span>
            <span class="float-right">
              <span className="p-1">
                <a>{Sort}</a><span className="p-1">Sort</span>
              </span>
              <span>
                <a>{Filter}</a><span className="p-1">Filter</span>
              </span>
            </span>
          </div>
          <table class="table  table-hover ">
            <thead>
              <tr >
                <th scope="col " style={{ width: "25rem" }}>
                  Name
                </th>

                <th scope="col">City</th>
                <th scope="col">Date</th>
                <th scope="col" className="w-25">
                  Assigned to a group?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="firstLine">
                <td>
                  {" "}
                  <img
                    src={userpic}
                    height="40"
                    width="40"
                    className="rounded-circle"
                    alt="user"
                  />{" "}
                  Elsa Maman
                </td>
                <td>Raanana</td>
                <td>May 26, 2019 </td>
                <td>
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-danger">NO</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
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
                  Rachel Monique
                </td>
                <td>Netanya</td>
                <td>May 26, 2019 </td>
                <td className="">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-danger">NO</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
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
                  Saophie Anthony
                </td>
                <td>Netanya</td>
                <td>May 26, 2019 </td>
                <td className="">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-success">YES</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
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
                  Benjamin Bueno
                </td>
                <td>Tel Aviv</td>
                <td>May 26, 2019 </td>
                <td className="">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-success">YES</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
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
                   Yoran Valaha
                </td>
                <td>Netanya</td>
                <td>May 26, 2019 </td>
                <td className="">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-success">YES</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
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
                 Yoran Valaha
                </td>
                <td>Ashdod</td>
                <td>May 26, 2019 </td>
                <td className="">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-success">YES</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
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
                  Yoran Valaha
                </td>
                <td>Jerusalem</td>
                <td>May 26, 2019 </td>
                <td className="">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-success">YES</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
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
                  Yoran Valaha
                </td>
                <td>Netanya</td>
                <td>May 26, 2019 </td>
                <td className="">
                  {" "}
                  <span class="lead">
                    <span class="badge badge-pill badge-success">YES</span>
                  </span>
                  <span className="float-right">
                    <Popover placement="bottomRight">
                      {MoreOutlinedBlack}
                    </Popover>
                  </span>
                </td>
              </tr>
            </tbody>
            
         
     
           
          </table>
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
         
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </div>
      </div>
    </ViewWrapper>
  );
}
