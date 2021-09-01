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
    const history = useHistory()

    const handleChange = (data, id) => {
        console.log(data)
        console.log(id)
        if (id) {
            (async () => {
                User.setSeniorstatus(id, data)
                    .then((res) => {
                        getSenior()
                    })
                    .catch((err) => console.log(err));
            })();
        }
    }

    let location = useLocation();
    const id = new URLSearchParams(location.search).get("id");
    console.log("id", id)

    const getSenior = () => {
        Groups.getSeniorBygroupId(id)
            .then((res) => {
                console.log(res.data.data.senior)

                
                if (Seniors.filter(t => Object.values(t).includes("done")   ).length > 0) {
                    Groups.updateGroup(id).then(res => {
                        history.push("/volenteer/assignedgroups/view")
                    })
                } 

                setSeniors(res.data.data.senior)
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        if (id) {
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
                        <span>
                            <a className="edit "> <ul>Edit on another ?</ul></a>
                        </span>

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
                                        return <div className="row">
                                            <p className="col-md-4">{senior.fullName}</p>
                                            <div className="col-md-4 rounded-lg" style={{ backgroundColor: "#dda0dd" }}>
                                                <ul onChange={(e) => { handleChange(e.target.value, senior._id) }}>
                                                    <li style={{ listStyle: "none", display: "inline" }}>
                                                        <input type="radio" name={index} value="done" />
                                                        Done
                                                        <input type="radio" name={index}
                                                            value="todo" id="custom_venuetype_private" />
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
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">

                            <MyMapComponent isMarkerShown lat={48.882775} lng={2.176931} />

                            <div className="row ml-5 mt-4  d-flex justify-content-center">
                                <span>{MapMarker}</span>{" "}
                                <h6 className="ml-1 mt-1">Address where group leader have to deliver</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </EditWrapper>
    );
};

export default EditPage;