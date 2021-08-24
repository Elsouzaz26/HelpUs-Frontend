import React, { useState } from "react";
import { AddWrapper } from "./Add.styled"
import TopbarUser from "../../../Topbar/TopbarUser";
import {Bell,Search} from "../../../../assets/Icons"

const AddPage = () => {
 
  const [formdata,setFormData]=useState({gender:"",surname:"",address:"",city:"",email:"",telephone:""})
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
 
<div className="col-lg-6 ml-0">
<form className="" onSubmit={showRecord}>

     <div class="form-group col-6">
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
              </div>
<div className="form-group">
    <label for="" className="labels">Email address</label>
    <input type="email"  className="form-control bgColForm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleFormData} value={formdata.email} name="email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="" className="labels">Telephone</label>
    <input type="text" className="form-control  bgColForm"  id="" aria-describedby="" placeholder="05 44 55 44 44" onChange={handleFormData} value={formdata.telephone} name="telephone" />
   
  </div>
  <div className="form-group">
    <label for="" className="labels">Name & Surname</label>
    <input type="text" className="form-control  bgColForm"  id="" aria-describedby="" placeholder="22 Smilansky " onChange={handleFormData} value={formdata.surname} name="surname" />
   
  </div> 


  <div className="form-group">
    <label for="" className="labels">Address street</label>
    <input type="text" className="form-control bgColForm"  id="" aria-describedby="" placeholder="22 Smilansky" value={formdata.address}  name="address" onChange={handleFormData}/>
   
  </div>

  <div className="form-group">
    <label for="" className="labels">City</label>
    <input type="text" className="form-control  bgColForm"  id="" aria-describedby="" placeholder="Netanya" onChange={handleFormData} value={formdata.city} name="city"/>
  name=""   
  </div>
  <div className="form-group">
    <label for="pwd" className="labels">Password</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required onChange={handleFormData} value={formdata.password} name="password" />
    <div className="valid-feedback">Valid.</div>
    <small id="pwd" className="form-text text-muted">You will be able to login</small>
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