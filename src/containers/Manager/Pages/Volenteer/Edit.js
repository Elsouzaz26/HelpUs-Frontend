import React, { useState } from "react";
import { EditWrapper } from "./Edit.styled";
import TopbarUser from "../../../Topbar/TopbarUser";

const EditPage = () => {
  return (
    <EditWrapper>
      <div className="container-fluid">
        <div className=" clearfix mt-0 mb-5">
          <span class=" float-left col-6">
            {" "}
            <h4>
              Edit{" "}
              <a class="btn badge badge-pill badge-primary ml-5">
                Add new Senior
              </a>{" "}
            </h4>
            <h4 className="mt-" style={{ marginTop: "-15px" }}>
              Volenteer
            </h4>{" "}
          </span>
          <span className="text-right">
            {" "}
            <TopbarUser />
          </span>
        </div>
        <div className="row"></div>
        <div className="row ">
          <div className="col-12">
            <h5 className="ml-4">Edit Benjamin Bueno</h5>
          </div>
          <div className="row ml-4 ">
            <div
              className="ml-3"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p className="text-primary p-1" style={{ fontSize: ".8rem" }}>
                Edit someone else ?
              </p>
              <div class="search form-control-sm">
                <input
                  type="text"
                  name="search"
                  class="round bg-primary border-0 "
                />
                <i
                  type="submit"
                  class="corner fa fa-search mt-1 text-white"
                  value=""
                />
              </div>
            </div>
          </div>
          <div></div>
     
        </div>
        <div className="row">
        <div className="col-lg-3">
            <form className="ml-4 ">
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <b>Gender</b>
                  <span className="star text-danger">*</span>
                </label>
                <div className="border border-4 p-2 bgColForm">
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Male
                    </label>
                  </div>
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <b>Selct Age</b>
                  <span className="star text-danger">*</span>
                </label>

                <select
                  class="form-control bg-transparent bgColForm"
                  id="exampleFormControlSelect1"
                >
                  <option>78 years old</option>
                  <option>79 years old</option>
                  <option>80 years old</option>
                  <option>81 years old</option>
                  <option>82 years old</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <b>Address</b>
                </label>
                <input
                  type="text"
                  class="form-control bg-transparent bgColForm"
                  id=""
                  aria-describedby=""
                  placeholder="22 Smilansky "
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  class="form-control bg-transparent bgColForm"
                  id=""
                  aria-describedby=""
                  placeholder="Netanya"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  class="form-control bg-transparent bgColForm"
                  id=""
                  aria-describedby=""
                  placeholder="ELSA@MAMAN.COM"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <b>Telephone</b>
                </label>
                <input
                  type="text"
                  class="form-control bg-transparent bgColForm"
                  id=""
                  aria-describedby=""
                  placeholder="05 44 55 44 44"
                />
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  <b>This senior need medical supply</b>
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  <b>This senior need food supply</b>
                </label>
              </div>

              <button type="submit" class="btn btn-primary w-100 mt-2">
                Update this senior
              </button>
            </form>
          </div>
        </div>
      </div>
    </EditWrapper>
  );
};

export default EditPage;
