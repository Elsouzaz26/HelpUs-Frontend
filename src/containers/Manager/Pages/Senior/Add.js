import React, { useState } from "react";
import { AddWrapper } from "./Add.styled"
import TopbarUser from "../../../Topbar/TopbarUser";
import {usePlacesWidget} from "react-google-autocomplete";


const AddPage = () => {
 
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["(cities)"],
      
    },
  });
  const { ref1 } = usePlacesWidget({
    apiKey: "AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["(address)"],
      
    },
  });
  return (
   <AddWrapper>
      <div className="container-fluid">
        

      <div className=" clearfix mt-0 mb-2">
        <span class=" float-left col-6">
          {" "}
          <h4>
          Add a new senior{" "}
           
          </h4>{" "}
         
        </span>
        <span className="text-right">
          {" "}
          <TopbarUser />
        </span>
      </div>
      <div className="row"></div>
<div className="row mb-5">
 
<div className="col-6">
<form className="">
<div class="form-group">
    <label for="" className="labels">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="" className="labels">Telephone</label>
    <input type="text" class="form-control  bgColForm"  id="" aria-describedby="" placeholder="05 44 55 44 44"/>
   
  </div>
  <div class="form-group">
    <label for="" className="labels">Name & Surname</label>
    <input type="text" class="form-control  bgColForm"  id="" aria-describedby="" placeholder="22 Smilansky "/>
   
  </div> 
  <label class="my-1 mr-2 labels" for="inlineFormCustomSelectPref">Gender</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Male</option>
    <option value="1">Female</option>
    <option value="2">Others</option>
    
  </select>

  <div class="form-group">
    <label for="" className="labels">Address street</label>
    <input type="text" class="form-control bgColForm" ref={ref1} defaultValue={'Bus Stand'} id="" aria-describedby=""  placeholder="22 Smilansky"/>
   
  </div>

  <div class="form-group">
    <label for="" className="labels">City</label>
    <input type="text" class="form-control  bgColForm" defaultValue={'Amsterdam'} ref={ref} id="" aria-describedby="" placeholder=""/>
   
  </div>
 
 <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label labels" for="exampleRadios1">This senior need medical supply
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label labels" for="exampleRadios2">
This senior need food supply
  </label>
</div>
  
  <button type="submit" class="btn btn-primary mt-2 " style={{fontSize:""}}>Add this senior</button>
</form>
  
</div>
</div>
      </div>
      
      
      </AddWrapper>
  );
};

export default AddPage;