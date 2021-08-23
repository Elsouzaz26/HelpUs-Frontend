import React, { useState } from "react";
import { AddWrapper } from "./Add.styled"
import TopbarUser from "../../../Topbar/TopbarUser";
import {Bell,Search} from "../../../../assets/Icons"

const AddPage = () => {


  return (
   <AddWrapper>
      <div className="container-fluid">

     
      <div className=" clearfix mt-0 mb-2">
        <span className=" float-left col-6">
          {" "}
          <h4>
          Add a new volenteer{" "}
           
          </h4>{" "}
         
        </span>
        <span className="text-right">
          {" "}
          <TopbarUser />
        </span>
      </div>
      <div className="row"></div>
<div className="row mb-5">
 
<div className="col-lg-6">
<form className="">
<div className="form-group">
    <label for="" className="labels">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="" className="labels">Telephone</label>
    <input type="text" className="form-control  bgColForm"  id="" aria-describedby="" placeholder="05 44 55 44 44"/>
   
  </div>
  <div className="form-group">
    <label for="" className="labels">Name & Surname</label>
    <input type="text" className="form-control  bgColForm"  id="" aria-describedby="" placeholder="22 Smilansky "/>
   
  </div> 


  <div className="form-group">
    <label for="" className="labels">Address street</label>
    <input type="text" className="form-control bgColForm"  id="" aria-describedby="" placeholder="22 Smilansky"/>
   
  </div>

  <div className="form-group">
    <label for="" className="labels">City</label>
    <input type="text" className="form-control  bgColForm"  id="" aria-describedby="" placeholder="Netanya"/>
   
  </div>
  <div className="form-group">
    <label for="pwd" className="labels">Password</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
    <div className="valid-feedback">Valid.</div>
    <small id="" className="form-text text-muted">You will be able to login</small>
  </div>
 
  <div className="mt-5 pt-3">

  <button type="submit" className="btn btn-primary mt-2 " style={{fontSize:""}}>Add this volenteer</button>
  </div>
  
</form>
  
</div>
</div>
      </div>
      
      
      </AddWrapper>
  );
};

export default AddPage;