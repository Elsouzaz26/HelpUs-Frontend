import React, { useEffect, useState } from "react";
import { EditWrapper } from "./Edit.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import { Volunteer } from "../../../../service/Volunteer";
import { useLocation } from "react-router-dom";
import { Toast } from "../../../../service/Toast";
import { useHistory } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";

const EditPage = () => {
  const history = useHistory()
  const [addressStreet, setAddressStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [telePhone, setTelePhone] = useState("");
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const [id, setId] = useState("");
  const data = { addressCity, addressStreet, emailAddress, telePhone };
  const showRecord = (e) => {
    e.preventDefault();


    if(addressCity == "" || addressStreet == "" || emailAddress == "" || telePhone =="") {
      Toast.fire("error", "Please fill all fields");
      
      return
    }
    (async () => {
      console.log(id);
      Volunteer.editVolunteer(id, data).then((res) => {
          if (res) {
            history.push("/manager/volunteer/view")
           
            Toast.fire("success", "Volunteer Edited");
          }

          console.log(res);
        })
        .catch((err) => console.log(err));
    })();
  };

  let location = useLocation();
  const fullName = new URLSearchParams(location.search).get("fullName");

  useEffect(() => {
    if (fullName) {
      (async () => {
        Volunteer.getByVolunteerName(fullName)
          .then((res) => {
            const data = res.data.users[0];
            console.log(data);
            setId(data._id);
            setAddressCity(data.addressCity);
            setAddressStreet(data.addressStreet);
            setEmailAddress(data.emailAddress);
            setTelePhone(data.telePhone);
           
          })
          .catch((err) => console.log(err));
      })();
    }
  }, []);

  return (
    <EditWrapper>
      <div className="container-fluid">
        <div className=" clearfix mt-0 mb-5">
          <span class=" float-left col-6">
            {" "}
            <h4>Edit Volunteer</h4>
          </span>
          <span className="text-right">
            {" "}
            <TopbarUser />
          </span>
        </div>
        <div className="row"></div>
        <div className="row ">
          <div className="col-12">
            <h5 className="ml-6">Edit {fullName}</h5>
          </div>
          <div className="row ">
            <div
              className="ml-3"
              style={{ display: "flex", flexDirection: "row" }}
            >
            </div>
          </div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form className="" onSubmit={showRecord}>
            <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  Address
                </label>
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
                      setAddressStreet(place.formatted_address);
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
                {/* <input
                  type="text"
                  className="form-control  bgColForm"
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
                  City
                </label>
                <div>
                  <Autocomplete
                    style={{
                      padding: "10px",
                      fontWeight: "450",
                      fontSize: "16px",
                    }}
                    placeholder="Enter AddressCity "
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
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className="labels">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control -transparent bgColForm"
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
                  className="form-control -transparent bgColForm"
                  id="telephone"
                  aria-describedby=""
                  placeholder="05 44 55 44 44"
                  name="telePhone"
                  value={telePhone}
                  onChange={(e)=>{setTelePhone(e.target.value)}}
                />
              </div>

              <div className="mt-4 pt-5">
                <button type="submit" class="btn btn-primary mt-2 ">
                  Update this volunteer
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
