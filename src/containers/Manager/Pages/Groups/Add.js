import React from "react";
import TopbarUser from "../../../Topbar/TopbarUser";
import MyMapComponent from "../../../../Maps/Map";
import { Bell } from "../../../../assets/Icons";
const AddPage = () => {
  return (
    <div className="container-fluid">
      <div className=" clearfix mt-0 mb-2">
        <span class=" float-left col-6">
          {" "}
          <h4>Groups Page </h4>{" "}
        </span>
        <span className="text-right">
          {" "}
          <TopbarUser />
        </span>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <h6>
            This group delivery take place on date on the city of city and have
            been assigned automaticly via Kmeans algorithm to group eadername
            Here are the adress where group leadername need to deliver supply
          </h6>
          <div className="card mt-4" style={{ background: "#E5E5E5" }}>
            <a>
              <div class="clearfix">
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-left"
                >
                  <i>Geraldine Dora, 5 street xyz, city</i>
                </div>
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-right text-primary"
                >
                  <i> Need Midical Supply</i>
                </div>
              </div>
            </a>
            <a>
              <div class="clearfix">
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-left"
                >
                  <i>Evra Cohen, adress</i>
                </div>
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-right text-primary"
                >
                  <i>Need Midical Supply</i>
                </div>
              </div>
            </a>
            <a>
              <div class="clearfix">
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-left"
                >
                  <i>Levi Strauss, adress</i>
                </div>
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-right text-primary"
                >
                  <i>Need Midical Supply</i>
                </div>
              </div>
            </a>
            <a>
              <div class="clearfix">
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-left"
                >
                  <i>Jamel Debouze, adress</i>
                </div>
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-right text-primary"
                >
                  <i>Need Midical Supply</i>
                </div>
              </div>
            </a>
            <a>
              <div class="clearfix">
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-left"
                >
                  <i>Gad Elmaleh, adress</i>
                </div>
                <div
                  type="button"
                  class="btn btn-transparent border-0 float-right text-primary"
                >
                  <i>Need Midical Supply</i>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-2">
            <h6>Did you delivered all the adresses ?</h6>
          </div>
          <div className>
            <h6>Done = yes , To do = Not yet?</h6>
          </div>
          <div className="row">
            <div
              className="col- border border-secondary round ml-2 pl-2"
              style={{ borderRadius: "18px", background: "#D945FC" }}
            >
              <div class="custom-control custom-radio custom-control-inline ">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="customRadio"
                  name="example"
                  value="customEx"
                />
                <label class="custom-control-label" for="customRadio">
                  Done
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="customRadio2"
                  name="example"
                  value="customEx"
                />
                <label class="custom-control-label" for="customRadio2">
                  To do
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <MyMapComponent isMarkerShown />
        </div>
      </div>
      <div className="row">
        <div className="col-6 "></div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default AddPage;
