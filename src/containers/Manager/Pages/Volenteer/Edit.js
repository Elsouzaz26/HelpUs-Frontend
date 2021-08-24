import React, { useEffect, useState } from "react";
import { EditWrapper } from "./Edit.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import { Volenteer } from "../../../../service/Volenteer";
const EditPage = () => {
const [formdata,setFormData]=useState({address:"",city:"",email:"",telephone:""})
const handleFormData=(e)=>{
const name=e.target.name;
const value=e.target.value;
setFormData({...formdata,[name]:value})
console.log({[name]:value})
}
const showRecord=(e)=>{
  e.preventDefault()
  console.log(formdata)
}


  return (
    <EditWrapper>
      <div className="container-fluid">
        <div className=" clearfix mt-0 mb-5">
          <span class=" float-left col-6">
            {" "}
            <h4>
              Edit{" "}
              Volenteer
            </h4>
           
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
                <u>Edit someone else ?
</u>
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
            <form className="ml-4 " onSubmit={showRecord}>
              {/* <div class="form-group">
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
                        name="gender"
                        value={(formdata.gender = "male")}
                        onChange={handleFormData}
                      />
                      Male
                    </label>
                  </div>
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="gender"
                        value={(formdata.gender = "female")}
                        onChange={handleFormData}
                      />
                      Female
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <div class="form-group">
                <label for="exampleInputEmail1">
                  <b>Selct Age</b>
                  <span className="star text-danger">*</span>
                </label>

                <select
                  class="form-control bg-transparent bgColForm"
                  id="exampleFormControlSelect1"
                  value={formdata.age}
                  onChange={handleFormData}
                  name="age"
                >
                  <option>78 years old</option>
                  <option>79 years old</option>
                  <option>80 years old</option>
                  <option>81 years old</option>
                  <option>82 years old</option>
                </select>
              </div> */}
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
                  name="address"
                  value={formdata.address}
                  onChange={handleFormData}
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
                  name="city"
                  value={formdata.city}
                  onChange={handleFormData}
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
                  name="email"
                  value={formdata.email}
                  onChange={handleFormData}
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
                  name="telephone"
                  value={formdata.telephone}
                  onChange={handleFormData}
                />
              </div>

              {/* <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Supply"
                  id="exampleRadios1"
                />
                <label class="form-check-label" for="exampleRadios1">
                  <b>This senior need medical supply</b>
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Supply"
                  id="exampleRadios2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  <b>This senior need food supply</b>
                </label>
              </div> */}
              <div className="text-center mt-4 pt-5">
              <button type="submit" class="btn btn-primary mt-2 ">
               Save this volenteer
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </EditWrapper>
  );
};

export default EditPage;
