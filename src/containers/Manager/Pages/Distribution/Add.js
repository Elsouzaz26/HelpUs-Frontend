import React, { useEffect, useState } from "react";
import TopbarUser from "../../../Topbar/TopbarUser";
import MyMapComponent from "../../../../Maps/Map";
import { Bell, MapMarker } from "../../../../assets/Icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Senior } from "../../../../service/Senior";
import { Toast } from "../../../../service/Toast";
import { Distributions } from "../../../../service/Distributions";
import { Groups } from "../../../../service/Groups";
import { Volunteer } from "../../../../service/Volunteer";
import { useHistory } from "react-router";
const AddPage = () => {

  const [seniors, setSeniors] = useState([]);
  const [selectedSenior, setSelectedSenior] = useState([]);
  const [city, setCity] = useState("")
  const [kValue, setKvalue] = useState("")
  const [date, setDate] = useState("")
  const [cities, setCities] = useState([])
  const [isMapShown, setIsMapShown] = useState(false)
  const [response, setResponse] = useState({})
  const [volunteer, setVolunteer] = useState([])
  const [volunteerId, setVolunteerId] = useState("");
  const history = useHistory()
  const [group, setGroup] = useState([])

  useEffect(() => {
    Senior.getSenior().then(res => {
      console.log(res.data)
      setSeniors(res.data.users)
      let uniqueChars = [...new Set(res.data.users.map(user => user.addressCity))];
      setCities(uniqueChars)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const getSeniorList = (e) => {
    setCity(e.target.value)
    getVolunteer(e.target.value)
    setSelectedSenior(seniors.filter(senior => senior.addressCity == e.target.value))
  }


  const getVolunteer = (city) => {
    Volunteer.getVolunteerByCity(city).then(res => {
      setVolunteer(res.data.users)
    }).catch(err => {
      console.log(err)
    })
  }

  const generateGroup = () => {
    if (selectedSenior.length == 0 || kValue < 1 || date == "") {
      return Toast.fire("error", "Please select senior and enter k value")
    }

    Groups.kmean({ senior: selectedSenior, kValue, date, city }).then(res => {
      console.log("frontend res", res)
      setResponse(res.data)
      setGroup(res.data.group)
      console.log(res.data.group)
      setIsMapShown(true)

    })
      .catch(err => {
        console.log(err)
      })
  }


  const addDistribution = () => {

    if (group.filter(t => Object.keys(t).includes("leader")).length !== group.length || city == "" || date == "") {
      return Toast.fire("error", "Please select Volunteer")
    }

    Distributions.saveDistributions({ date, city, group }).then(res => {
      console.log("dis", res)
      history.push("/manager/distribution/view")

    }).catch(err => {
      console.log(err)
    })
  }

  const SetVoleneteer = (value, index) => {
    console.log(value, index)
    let newGroup = group
    newGroup[index].leader = value
    setGroup(newGroup)
  }


  return (
    <div className="container-fluid">
      <div className=" clearfix mt-0 mb-2">
        <span class=" float-left col-6">
          {" "}
          <h4>Add Distribution </h4>{" "}
        </span>
        <span className="text-right">
          {" "}
          <TopbarUser />
        </span>

      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div class="form-group">
            <label className="labels">
              Select a city where you want to delivery for this group
            </label>

            <select
              class="form-control bgColForm"
              id="exampleFormControlSelect1"
              onChange={getSeniorList}
            >

              <option value="">Choose City</option>
              {
                cities.map(city => {
                  return <option value={city}>{city}</option>
                })
              }
            </select>
          </div>
          <div className="mt-5 pt-5"></div>
          <div className="mt-4">
            List Senior adress that are on this city :<b>{city}</b>{" "}
          </div>
          <div className="card" style={{ background: "#E5E5E5" }}>

            {
              selectedSenior.map(senior => {
                return <a>
                  <div class="clearfix">
                    <div
                      type="button"
                      class="btn btn-transparent border-0 float-left"
                    >
                      <i> {senior.fullName} {senior.addressCity}</i>
                    </div>
                    <div
                      type="button"
                      class="btn btn-transparent border-0 float-right text-primary"
                    >
                      <i> {senior.needsMedicalSupply ? "Needs Medical supply" : senior.needsMedicalSupply ? "needs Food Supply" : ""}</i>
                    </div>
                  </div>
                </a>
              })
            }


          </div>
          <div className="text-danger">Please select a city first </div>
          <div className="mt-2">
            <h6>Assign a date to this group</h6>
          </div>
          <div className></div>
          <div className="row">
            <div className="col">
              <Calendar onChange={setDate} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mt-5 p-2" style={{ background: "#c4c4c4" }}>
            <div className="row ">
              <div className="col-9 d-flex justify-content-center">
                <h6 className="mt-4">
                  {" "}
                  How many Voleenteer do you need to allocate
                </h6>
              </div>
              <div className="col-2    d-flex justify-content-center mr-1 p-0">
                <h1 className="mt-2">
                  <input type="number" className="w-100 h-100" onChange={(e) => setKvalue(e.target.value)}></input>
                </h1>
              </div>
            </div>
          </div>
          <div>
            <h6>
              This is the{" "}
              <b>
                <u>K value</u>
              </b>{" "}
              of Kmeans algorithm
            </h6>
          </div>

          <div className="row p-5">
            <div className="col p-2 d-flex justify-content-center rounded">
              <button className="btn btn-primary" onClick={generateGroup}>
                See on the map the repartition of groups generated
              </button>
            </div>
          </div>
          {
            isMapShown ?
              <div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10">

                    <MyMapComponent isMarkerShown groups={response.group} />

                    <div className="row mt-4  d-flex justify-content-center">
                      <span>{MapMarker}</span>{" "}
                      <h6 className="ml-1 mt-1">Groups generated with the K value</h6>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h6>Assigned each group to a volunteer in this city</h6>
                </div>
                <div className="card p-2" style={{ background: "#E5E5E5" }}>
                  <a>
                    <div class="clearfix">
                      <div
                        type="button"
                        class="btn btn-transparent border-0 float-left"
                      >
                        {response.group.map((res,index)=>{
                        return (<div className="row"  key={index}>

                            <div className="col-6">
                              <label>
                              Group Id :{res._id}
                            </label>

                            </div>
                            <div className="col-6">
                            <select className="form-control" onChange={(e) => SetVoleneteer(e.target.value, index) }>
                          <option value="">Choose Voleenteer in city</option>
                          {
                            volunteer.map(v => {
                              return  <option value={v._id}>{v.fullName}</option>

                            })
                          }
                        </select>

                            </div>

                              
                        </div>
                        )
                        })
                      }
                        {/* {response.group.map(res=>{
                          return <div>
                          <i className="p-3">{res._id}</i>
                          <div class="dropdown float-right ">
                        <select className="form-control" onChange={(e) => setVolunteerId(e.target.value) }>
                          <option value="">Choose Voleenteer in city</option>
                          {
                            volunteer.map(v => {
                              return  <option value={v._id}>{v.fullName}</option>

                            })
                          }
                        </select>
                      </div>
                          </div>
                        })} */}

                      </div>

                    </div>
                  </a>
                </div>
              </div>
              : null
          }

        </div>
      </div>
      {
        isMapShown ?
          <div className="row  d-flex justify-content-center mb-4 mt-4">
            <div className="col-md-6 p-2 border border-primary bg-light d-flex justify-content-center  rounded">
              <button className="btn btn-primary" onClick={addDistribution}>
                Generate groups and redirect to distribution list
              </button>
            </div>
          </div>
          : null
      }

    </div>
  );
};

export default AddPage;
