import React, { useEffect, useState } from "react";
import { EditWrapper } from "./Edit.styled";
import TopbarUser from "../../../Topbar/TopbarUser";
import MyMapComponent from "./Map";
import { Bell, MapMarker } from "../../../../assets/Icons";
import { useLocation, useParams } from "react-router";
import { Groups } from "../../../../service/Groups";
import { User } from "../../../../service/User";
import { useHistory } from "react-router";
const EditPage = () => {
    const [Seniors, setSeniors] = useState([])
    const [Location, setLocation] = useState("")
    const [isMapShown, setIsMapShown] = useState(false)
    let location = useLocation();
    const groupId = new URLSearchParams(location.search).get("id");
    
    
    console.log("location",Location.lng)
    const handleChange = (data, id, index) => {
        
        if (id) {
            User.setSeniorstatus(id, data)
                .then((res) => {

                    let seniors = Seniors
                    seniors[index].deliveryStatus = data
                    console.log(seniors)

                    if(seniors.some(senior => senior.deliveryStatus !== "done" )) {
                        Groups.updateGroup(groupId, "To do").then(res => {
                            console.log(res)
                        })
                    } else {
                        Groups.updateGroup(groupId, "Done").then(res => {
                            console.log(res)
                        })
                    }
                    // setSeniors(seniors)
                    getSenior()
                })
                .catch((err) => console.log(err));
        }
    }


    const getSenior = async () => {
        setIsMapShown(false)
        Groups.getSeniorBygroupId(groupId)
            .then(async (res) => {
                
                console.log(res.data.data.senior)
                setSeniors(res.data.data.senior)
                setIsMapShown(true)
                 
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        if (groupId) {
            (async () => {
                getSenior()
            })();
        }
    }, []);
    return (
        <EditWrapper>
            <div className="container-fluid">
                <div className=" clearfix mt-0 mb-5">
                    <span className=" float-left flex-inline">
                        {" "}
                        <h4>Group Page</h4>
                        

                    </span>
                    <span className="text-right">
                        {" "}
                        <TopbarUser />
                    </span>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <p>This group delivery takes place on date  and on the city of and has been automatically assigned by a k-means algorithm to group leader </p>
                        <p>here are the names where group leader need to deliver supply</p>
                        <div className="card p-2" style={{ background: "#E5E5E5" }}>
                            <a>
                                <div class="clearfix">
                                    {/* <div
                                        type="button"
                                        className="btn btn-transparent border-0 float-left"
                                    > */}
                                    {Seniors.map((senior, index) => {
                                        return <div className="row" >
                                            <p className="col-md-4">{senior.fullName}</p>
                                            <div className="col-md-4 rounded-lg" style={{ backgroundColor: "#dda0dd" }}>
                                                <ul onChange={(e) => { handleChange(e.target.value, senior._id, index) }}>
                                                    <li style={{ listStyle: "none", display: "inline" }}>
                                                        <input type="radio" name={index} value="done" checked={senior.deliveryStatus == "done"}/>
                                                        Done
                                                        <input type="radio" name={index}
                                                            value="todo" id="custom_venuetype_private" checked={senior.deliveryStatus !== "done"}/>
                                                        To-do
                                                    </li>
                                                </ul>
                                            </div>
                                            {
                                                senior.needsFoodSupply ? (
                                                    <p className="col-md-4"> {senior.needsFoodSupply}</p>
                                                ) : (
                                                    <p className="col-md-4"> {senior.needsMedicalSupply}</p>
                                                )
                                            }

                                        </div>
                                    })}

                                    {/* </div> */}

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                    {
                        isMapShown?
                        <MyMapComponent isMarkerShown markers={Seniors.map(senior => senior.location)} />
                        : null
                    }


                        {/* { map ? 
                         (
                             <MyMapComponent isMarkerShown lat={Location.lat} lng={Location.lng} />
                         ):(
                             <MyMapComponent isMarkerShown lat={48.882775} lng={2.176931} />
                         )
                        }  */}
                            

                            <div className="row ml-5 mt-4  d-flex justify-content-center">
                                <span>{MapMarker}</span>{" "}
                                <h6 className="ml-1 mt-1">Address where group leader have to deliver</h6>
                            </div>
                        </div>

                </div>
            </div>
        </EditWrapper>
    );
};

export default EditPage;