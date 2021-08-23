import React, { useState } from "react";
import VolenteerHomepageWrapper from "./HomePage.styles";
import TopbarUser from "../../Topbar/TopbarUser";
import Helpus from "../../../assets/images/Helpus.png";
import volenhome from "../../../assets/images/volenhome.png";
import { useHistory } from "react-router-dom";


const VolenteerHomePage = () => {

const history = useHistory();
const [volenteerName, setVolenteerName] = useState('');

const viewAllAssignedGroups = (event) => {
  
}
const viewBlogs = (event) => {

}
const chatWithManager = (event) => {

}
    return (
        <VolenteerHomepageWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 mt-4 text-right">
                        <TopbarUser />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center ">
                        <img className="img1" src={Helpus} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>WELCOME {volenteerName}</h2>
                    </div>
                </div>
                <div className="row">
                  <div className="card mx-auto mb-5">
                    <img src={volenhome} className="card-img-top"/>
                    <div className="card-body text-center">
                      <a className="btn btn-default btnStyle" onClick={viewAllAssignedGroups}>GROUP(S) WHERE I AM ASSIGNED</a>
                      <a className="btn btn-default btnStyle" onClick={viewBlogs}>BLOG</a>
                      <a className="btn btn-default btnStyle" onClick={chatWithManager}>CHAT WITH MANAGER</a>
                    </div>
                  </div>
                </div>
            </div>

        </VolenteerHomepageWrapper>
    )
}

export default VolenteerHomePage;