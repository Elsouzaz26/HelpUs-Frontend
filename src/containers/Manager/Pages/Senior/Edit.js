import React, { useState } from "react";
import { EditWrapper } from "./Edit.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { Senior } from "../../../../service/Senior";
import { Toast } from "../../../../service/Toast";
import { useHistory } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";

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
const [lat, setLat] = useState();
  const [lng, setLng] = useState();
const history  = useHistory()
const data={addressCity,addressStreet,emailAddress,telePhone,needsFoodSupply,needsMedicalSupply}

  const showRecord = (e) => {
    e.preventDefault();
    
    (async() => {
      
      console.log(id)
      Senior.editSenior(id,data).then(res => {
        if(res){
         
           history.push("/manager/senior/view")
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
       
        let data = (res.data.users[0])

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
            className="col-6"
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "-50px",
            }}
          >
          </div>
        </div>
        <div className="row mb-5 mt-4">
          <div className="col-12">
            <h5 className="ml-4">Edit {fullName}</h5>
          </div>
          <div className="col-lg-6">
            <form className="ml-4 mt-3" onSubmit={showRecord}>

              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  Address <span className="text-danger">*</span>
                </label>
                <div>
                <Autocomplete
                    style={{
                      padding: "10px",
                      fontWeight: "450",
                      fontSize: "16px",
                    }}
                    className="autoInput bg-transparent"
                    apiKey={"AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw"}
                    onPlaceSelected={(place) => {
                      console.log(place);
                      setAddressStreet(place.address_components[0].long_name);
                      const latitude = place.geometry.location.lat() + Math.floor(Math.random() * 10)* 0.000001;
                      const longitude = place.geometry.location.lng() + Math.floor(Math.random() * 10)* 0.000001;
                      setLat(latitude);
                      setLng(longitude);
                    }}
                    options={{
                      componentRestrictions: { country: ["us", "ca"] },
                      fields: ["address_components", "geometry"],
                      types: ["address"],
                    }}
                    name="addressStreet"
                    id="addressStreet"
                   defaultValue={addressStreet}
                  />
                </div>
                {/* <input
                  type="text"
                  className="form-control bg-transparent bgColForm"
                  id="addressStreet"
                  aria-describedby=""
                  placeholder="Elsa Maman "
                  name="addressStreet"
                  value={addressStreet}
                  onChange={(e)=>{setAddressStreet(e.target.value)}}
                /> */}
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  City <span className="text-danger">*</span>
                </label>
                <div>
                  <Autocomplete
                    style={{
                      padding: "10px",
                      fontWeight: "450",
                      fontSize: "16px",
                    }}
                    placeholder="Enter AddressCity"
                    className="autoInput bg-transparent"
                    apiKey={"AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw"}
                    onPlaceSelected={(place) => {
                      setAddressCity(place.formatted_address);
                      console.log(place);
                   
                    }}
                    options={{
                      types: ["(cities)"],
                    }}
                    name="addressCity"
                    id="addressCity"
                    defaultValue={addressCity}
                  />
                </div>
                {/* <input
                  type="text"
                  className="form-control bg-transparent bgColForm"
                  id="city"
                  aria-describedby=""
                  placeholder="Netanya"
                  name="addressCity"
                  value={addressCity}
                  onChange={(e)=>{setAddressCity(e.target.value)}}
                /> */}
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  Email <span className="text-danger">*</span>
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
                  Telephone <span className="text-danger">*</span>
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
                  type="checkbox"
                  id="needsMedicalSupply"
                  
                  name="needsMedicalSupply"
                  value={true}
                  checked={needsMedicalSupply}
                  onChange={(e)=>{setNeedsMedicalSupply(e.target.checked)}}
                />
                <label className="form-check-label " for="needsMedicalSupply">
                  This senior need medical supply
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="needsFoodSupply"
                  
                  name="needsFoodSupply"
                  value={true}
                  checked={needsFoodSupply}
                  onChange={(e)=>{setNeedsFoodSupply(e.target.checked)}}
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
