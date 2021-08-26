import React, { useState } from "react";
import { EditWrapper } from "./Edit.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { Senior } from "../../../../service/Senior";
import { Toast } from "../../../../service/Toast";

const EditPage = () => {
//   const [formdata, setFormData] = useState(
// {gender: "",
// age: "",
// fullName: "",
// addressStreet: "",
// addressCity: "",
// emailAddress: "",
// telePhone: "",
// needsMedicalSupply: false,
// needsFoodSupply: false,}
//   );
//   const handleFormData = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setFormData({ ...formdata, [name]: value });

//     console.log({ [name]: value });
//   };

const[addressStreet,setAddressStreet]=useState("")
const[addressCity,setAddressCity]=useState("")
const[emailAddress,setEmailAddress]=useState("")
const[telePhone,setTelePhone]=useState("")
const[needsMedicalSupply,setNeedsMedicalSupply]=useState()
const[needsFoodSupply,setNeedsFoodSupply]=useState()
const[id,setId]=useState("")
const data={addressCity,addressStreet,emailAddress,telePhone,needsFoodSupply,needsMedicalSupply}
  const showRecord = (e) => {
    e.preventDefault();
    
    (async() => {
      
      console.log(id)
      Senior.editSenior(id,data).then(res => {
        if(res){
          setAddressCity("");
            setAddressStreet("");
            setEmailAddress("");
            setTelePhone("");
            setNeedsFoodSupply()
        setNeedsMedicalSupply()
      
           
          Toast.fire("success","Senior Edited")
        }
          
        console.log(res)
      
      
        
      })
      .catch(err=> console.log(err))
    })();
  };
let location = useLocation()
const fullName=new URLSearchParams(location.search).get("fullName")


  useEffect(() => {
    if(fullName)
    {
    (async() => {
      Senior.getBySeniorName(fullName).then(res => {
       
          const data=res.data.users[0]
        console.log(data)
        setId(data._id)
        setAddressCity(data.addressCity)
        setAddressStreet(data.addressStreet)
        setEmailAddress(data.emailAddress)
        setTelePhone(data.telePhone)
        setNeedsFoodSupply(data.needsFoodSupply)
        setNeedsMedicalSupply(data.needsMedicalSupply)
      
        
      })
      .catch(err=> console.log(err))
    })();
    }
  },[]);
 
  return (
    <EditWrapper>
      <div className="container-fluid">
        <div className=" clearfix mt-0 mb-5">
          <span className=" float-left col-6">
            {" "}
            <h4>
              Edit Senior{" "}
              
            </h4>{" "}
          </span>
          <span className="text-right">
            {" "}
            <TopbarUser />
          </span>
        </div>
        <div className="row ml-1">
          <div
            className="col-4"
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "-50px",
            }}
          >
            <p className="text-primary" style={{ fontSize: ".8rem" }}>
              <u>Edit someone else ?</u>
            </p>
            <div className="search form-control-sm ml-1 text-white" >
              <input
                type="text"
                name="search"
                className="round bg-primary border-0 "
              />
              <i
                type="submit"
                className="corner fa fa-search mt-1 text-white"
                value=""
              />
            </div>
          </div>
        </div>
        <div className="row mb-5 mt-4">
          <div className="col-12">
            <h5 className="ml-4">Edit {fullName}</h5>
          </div>
          <div className="col-lg-3">
            <form className="ml-4 mt-3" onSubmit={showRecord}>

              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control bg-transparent bgColForm"
                  id="addressStreet"
                  aria-describedby=""
                  placeholder="22 Smilansky "
                  name="addressStreet"
                  value={addressStreet}
                  onChange={(e)=>{setAddressStreet(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  City
                </label>
                <input
                  type="text"
                  className="form-control bg-transparent bgColForm"
                  id="city"
                  aria-describedby=""
                  placeholder="Netanya"
                  name="addressCity"
                  value={addressCity}
                  onChange={(e)=>{setAddressCity(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-transparent bgColForm"
                  id="email"
                  aria-describedby=""
                  placeholder="ELSA@MAMAN.COM"
                  name="emailAddress"
                  value={emailAddress}
                  onChange={(e)=>{setEmailAddress(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  Telephone
                </label>
                <input
                  type="text"
                  className="form-control bg-transparent bgColForm"
                  id="telephone"
                  aria-describedby=""
                  placeholder="05 44 55 44 44"
                  name="telePhone"
                  value={telePhone}
                  onChange={(e)=>{setTelePhone(e.target.value)}}
                />
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="needsMedicalSupply"
                  
                  name="needsMedicalSupply"
                  value={true}
                  checked={needsMedicalSupply === "true"}
                  onChange={(e)=>{setNeedsMedicalSupply(e.target.value)}}
                />
                <label className="form-check-label " for="needsMedicalSupply">
                  This senior need medical supply
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="needsFoodSupply"
                  
                  name="needsFoodSupply"
                  value={true}
                  checked={needsFoodSupply === "true"}
                  onChange={(e)=>{setNeedsFoodSupply(e.target.value)}}
                />
                <label className="form-check-label " for="needsFoodSupply">
                  This senior need food supply
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2">
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
