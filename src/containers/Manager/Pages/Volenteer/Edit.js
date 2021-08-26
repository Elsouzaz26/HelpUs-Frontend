import React, { useEffect, useState } from "react";
import { EditWrapper } from "./Edit.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import { Volenteer } from "../../../../service/Volenteer";
import { useLocation } from "react-router-dom";
import { Toast } from "../../../../service/Toast";
const EditPage = () => {
  const [addressStreet, setAddressStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [telePhone, setTelePhone] = useState("");

  const [id, setId] = useState("");
  const data = { addressCity, addressStreet, emailAddress, telePhone };
  const showRecord = (e) => {
    e.preventDefault();

    (async () => {
      console.log(id);
      Volenteer.editVolenteer(id, data).then((res) => {
          if (res) {
            setAddressCity("");
            setAddressStreet("");
            setEmailAddress("");
            setTelePhone("");
           
            Toast.fire("success", "Volenteer Edited");
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
        Volenteer.getByVolenteerName(fullName)
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
            <h4>Edit Volenteer</h4>
          </span>
          <span className="text-right">
            {" "}
            <TopbarUser />
          </span>
        </div>
        <div className="row"></div>
        <div className="row ">
          <div className="col-12">
            <h5 className="ml-4">Edit {fullName}</h5>
          </div>
          <div className="row ml-4 ">
            <div
              className="ml-3"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p className="text-primary p-1" style={{ fontSize: ".8rem" }}>
                <u>Edit someone else ?</u>
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
