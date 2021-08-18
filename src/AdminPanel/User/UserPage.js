import React from "react";
import UserWrapper from "./UserPage.styles";
import { EditIcon, DeleteIcon } from "../../assets/Icons";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Serial #",
    dataIndex: "Serial",
    key: "Serial",
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    render: (text) => <a className="text-primary">{text}</a>,
  },

  {
    title: "Username",
    key: "Username",
    dataIndex: "Username",
  },
  {
    title: "Email",
    key: "Email",
    dataIndex: "Email",
  },

  {
    title: "Customer",
    key: "Customer",
    dataIndex: "Customer",
  },
  {
    title: "Role",
    key: "Role",
    dataIndex: "Role",
    render: (tag2) => (
      <>
        {tag2.map((tag) => {
          let color = tag == "Viewer" ? "orange" : "geekblue";

          return (
            <Tag
              color={color}
              style={{
                border: "none",
                backgroundColor: "rgba(77, 210, 48, 0.1)",
                borderRadius: "25px",
              }}
              key={tag}
            >
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Language",
    key: "Language",
    dataIndex: "Language",
  },
  {
    title: " ",
    key: "icon",
    dataIndex: "icon",
  },
  {
    title: " ",
    key: "icon1",
    dataIndex: "icon1",
  },
];

const dataSource = [
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Viewer"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Admin"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Viewer"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Admin"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Viewer"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Admin"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Admin"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
  {
    Serial: "0001",
    Name: "Muhammad Iqbal",
    Username: "Iqbal",
    Email: "iqbal@gmail.com",
    Customer: "MBK Team",
    Role: ["Admin"],
    Language: "English",
    icon: EditIcon,
    icon1: DeleteIcon,
  },
];

export default function () {
  return (
    <UserWrapper>
      <div className="container-fluid mt-3 ml-3 mb-3">
        <div className="row">
          <div className="col-6">
            <h4>
              <b>Users</b>
            </h4>
          </div>
        </div>
        <button
          className="btn btn-primary mt-3 pd"
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add User
        </button>
        <div className="row ">
          <div className="container-fluid mt-3 tab-content ">
            <div className="card" style={{ overflow: "auto" }}>
              <div className="card-body ">
                <Table
                  size="small"
                  pagination={false}
                  columns={columns}
                  dataSource={dataSource}
                />
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content bradius">
              <div class="modal-body ">
                <div class="row">
                  <div className="col-md-6">
                    <h6 class="modal-title" id="exampleModalLongTitle">
                      <b>Add User</b>
                    </h6>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
                <br></br>
                <form class="form-group mt-2">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        <b>Full Name</b>
                        <span className="fs">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control inputT"
                        placeholder="Username"
                      ></input>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <label>
                        <b>Username</b>
                        <span className="fs">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control inputT"
                        placeholder="Username"
                      ></input>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>
                        <b>Language</b>
                        <span className="fs">*</span>
                      </label>
                      <select className="custom-select form-control inputT">
                        <option selected>English</option>
                        <option value="One">Hindi</option>
                        <option value="Two">Chinese</option>
                        <option value="Three">Punjabi</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <label>
                        <b>Email</b>
                        <span className="fs">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control inputT"
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label>
                        <b>Password</b>
                        <span className="fs">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control inputT"
                        placeholder="***********"
                      ></input>
                    </div>
                    <div className="col-md-6"></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-5">
                      <button
                        type="button"
                        class="btn btn-primary float-left pl-4 pr-4"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        class="btn btn-light pl-3 pr-3 bg1 float-right"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-md-7"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End of model */}
      </div>
    </UserWrapper>
  );
}
