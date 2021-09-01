import React, { useState } from "react";
import { AddWrapper } from "./Add.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import { Toast } from "../../../../service/Toast";
import Autocomplete from "react-google-autocomplete";
import { Volunteer } from "../../../../service/Volunteer";

import { useHistory } from "react-router-dom";

const AddPage = () => {
  const history = useHistory();

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [telePhone, setTelePhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("volenteer");
  const [groupAdded, setGroupAdded] = useState(false);
  const [needsMedicalSupply, setNeedsMedicalSupply] = useState(false);
  const [needsFoodSupply, setNeedsFoodSupply] = useState(false);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [img, setImg] = useState("");
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
      img,
    };
    console.log(data);

    if (
      gender == "" ||
      fullName == "" ||
      telePhone == "" ||
      emailAddress == "" ||
      password == "" ||
      addressCity == "" ||
      addressStreet == ""
    ) {
      Toast.fire("error", "Please enter all fields");

      return;
    }
    (async () => {
      Volunteer.addVolunteer(data)
        .then((res) => {
          if (res) {
            Toast.fire("success", "Volunteer Added");
            history.push("/manager/volunteer/view");
          }

          console.log(res);
        })
        .catch((err) => {
          if (err) {
            setAge("");
            setEmailAddress("");
            setFullName("");
            setTelePhone("");
            setPassword("");
            setNeedsFoodSupply("");
            setNeedsMedicalSupply("");
            setAddressCity("");
            setAddressStreet("");
            setGender("");
            Toast.fire("error", `${err.data.msg}`);
          }
        });
    })();
  };

  return (
    <AddWrapper>
      <div className="container-fluid">
        <div className=" clearfix mt-0 mb-2">
          <span className=" float-left col-6">
            {" "}
            <h4>Add a new volunteer </h4>{" "}
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
              <div class="form-group mt-4">
                <label className="labels">
                  Gender
                  <span className="star text-danger">*</span>
                </label>
                <div className="border border-4 p-2 bg-white">
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="male"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        name="gender"
                      />
                      Male
                    </label>
                  </div>
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="female"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        name="gender"
                      />
                      Female
                    </label>
                  </div>
                </div>
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
                  value={fullName}
                  placeholder="Elsa Maman "
                />
              </div>

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
                   placeholder="street address"
                  />
                </div>
                {/* <input
                  type="text"
                  class="form-control bgColForm"
                  id="addressStreet"
                  aria-describedby=""
                  name="addressStreet"
                  value={addressStreet}
                  placeholder="Street"
                  onChange={(e) => {
                    setAddressStreet(e.target.value);
                  }}
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
                    placeholder="Enter city"
                    className="autoInput"
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

              <div className="mt-5 pt-3">
                <button
                  type="submit"
                  className="btn btn-primary mt-2 "
                  style={{ fontSize: "" }}
                >
                  Add this volunteer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AddWrapper>
  );
};

export default AddPage;
