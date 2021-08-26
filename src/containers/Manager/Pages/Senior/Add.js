import React, { useState } from "react";
import { AddWrapper } from "./Add.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import { usePlacesWidget } from "react-google-autocomplete";
import { Toast } from "../../../../service/Toast";
import Autocomplete from "react-google-autocomplete";
import { Senior } from "../../../../service/Senior";
import img1 from "../../../../assets/images/Login.png";
const AddPage = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const [addressStreet, setAddressStreet] = useState("canada");
  const [addressCity, setAddressCity] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [telePhone, setTelePhone] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole] = useState("senior");
  const [groupAdded,setGroupAdded  ]= useState(false)
  const [needsMedicalSupply, setNeedsMedicalSupply] = useState(false);
  const [needsFoodSupply, setNeedsFoodSupply] = useState(false);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
const [img,setImg]=useState("")
  const showRecord = (e) => {
    e.preventDefault();
    const data = {
      gender,
      age,
      fullName,
      addressStreet,
      addressCity,
      emailAddress,
      telePhone,
      role,
      password,
      groupAdded,
      needsMedicalSupply,
      needsFoodSupply,
      lat,
      lng,
      img
    };
    console.log(data);

    (async () => {
      Senior.addSenior(data)
        .then((res) => {
          if (res) {
            setAge("")
            setEmailAddress("")
            setFullName("")
            setTelePhone("")
            setPassword("")
            setNeedsFoodSupply("")
            setNeedsMedicalSupply("")
            setAddressCity("")
            setAddressStreet("")
            setGender("")
            Toast.fire("success", "Senior Added");
          }

          console.log(res);
        })
        .catch((err) => {
          if (err){
            Toast.fire("error",`${err.data.msg}`)
          }
    });
        
    })();
  };

  return (
    <AddWrapper>
      <div className="container-fluid">
        <div className=" clearfix mt-0 mb-2">
          <span class=" float-left col-6">
            {" "}
            <h4>Add a new senior </h4>{" "}
          </span>
          <span className="text-right">
            {" "}
            <TopbarUser />
          </span>
        </div>
        <div className="row"></div>
        <div className="row mb-5">
          <div className="col-6">
            <form className="" onSubmit={showRecord}>
              <div class="form-group w-75">
                <label className="labels">
                  Select Age
                  <span className="star text-danger">*</span>
                </label>

                <select
                  class="form-control bg-transparent bgColForm"
                  id="exampleFormControlSelect1"
                  value={age}
                  name="age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                >
                  <option>78 years old</option>
                  <option>79 years old</option>
                  <option>80 years old</option>
                  <option>81 years old</option>
                  <option>82 years old</option>
                  <option>22 years old</option>
                </select>
              </div>
              <div class="form-group">
                <label for="" className="labels">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailAddress"
                  aria-describedby="emailHelp"
                  value={emailAddress}
                  name="emailAddress"
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="" className="labels">
                  Telephone
                </label>
                <input
                  type="text"
                  class="form-control  bgColForm"
                  id="telePhone"
                  aria-describedby=""
                  onChange={(e) => {
                    setTelePhone(e.target.value);
                  }}
                  name="telePhone"
                  value={telePhone}
                  placeholder="05 44 55 44 44"
                />
              </div>
              <div class="form-group">
                <label for="" className="labels">
                  Name & Surname
                </label>
                <input
                  type="text"
                  class="form-control  bgColForm"
                  id="fullName"
                  aria-describedby=""
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  name="fullName"
                  vlaue={fullName}
                  placeholder="John Doe"
                />
              </div>
              <label class="my-1 mr-2 labels" for="gender">
                Gender
              </label>
              <select
                class="custom-select my-1 mr-sm-2"
                id="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                name="gender"
                value={gender}
              >
                <option selected>select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>

              <div class="form-group">
                <label for="" className="labels">
                  Address street
                </label>
                <div>
                  <Autocomplete
                    style={{
                      padding: "10px",
                      fontWeight: "450",
                      fontSize: "16px",
                    }}
                    className="autoInput"
                    apiKey={"AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw"}
                    onPlaceSelected={(place) => {
                      console.log(place);
                      setAddressCity(place.formatted_address);
                     
                    }}
                    options={{
                      types: ["(regions)"],
                    }}
                    name="addressStreet"
                    id="addressStreet"
                  />
                </div>
                {/* <input
                  type="text"
                  class="form-control autocomplete bgColForm"
                  id="addressStreet"
                  aria-describedby=""
                  name="addressStreet"
                  value={addressStreet}
                  placeholder="22 Smilansky"
                /> */}
              </div>

              <div class="form-group">
                <label for="" className="labels">
                  City
                </label>
                <div>
                  <Autocomplete
                    style={{
                      padding: "10px",
                      fontWeight: "450",
                      fontSize: "16px",
                    }}
                    placeholder="Enter AddressCity"
                    className="autoInput"
                    apiKey={"AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw"}
                    onPlaceSelected={(place) => {
                      setAddressCity(place.formatted_address);
                      console.log(place);
                      const latitude = place.geometry.location.lat();
                      const longitude = place.geometry.location.lng();
                      setLat(latitude);
                      setLng(longitude);
                    }}
                    options={{
                      types: ["(cities)"],
                    }}
                    name="addressCity"
                    id="addressCity"
                  />
                </div>
                {/* <input
                  type="text"
                  class="form-control autocomplete  bgColForm"
                  ref={ref}
                  id="addressCity"
                  aria-describedby=""
                  value={addressCity}
                  name="addressCity"
                  placeholder=""
                /> */}
              </div>
              <div className="form-group">
                <label for="pwd" className="labels">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  name="password"
                />
                <div className="valid-feedback">Valid.</div>
                <small id="pwd" className="form-text text-muted">
                  You will be able to login
                </small>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="needsMedicalSupply"
                  onChange={(e) => {
                    setNeedsMedicalSupply(e.target.value);
                  }}
                  name="needsMedicalSupply"
                  value={true}
                  checked={needsMedicalSupply === "true"}
                />
                <label class="form-check-label labels" for="needsMedicalSupply">
                  This senior need medical supply
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="needsFoodSupply"
                  name="needsFoodSupply"
                  value={true}
                  checked={needsFoodSupply === "true"}
                  onChange={(e) => {
                    setNeedsFoodSupply(e.target.value);
                  }}
                />
                <label class="form-check-label labels" for="needsFoodSupply">
                  This senior need food supply
                </label>
              </div>

              <button
                type="submit"
                class="btn btn-primary mt-2 "
                style={{ fontSize: "" }}
              >
                Add this senior
              </button>
            </form>
          </div>
        </div>
      </div>
    </AddWrapper>
  );
};

export default AddPage;
