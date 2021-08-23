import React, { useState } from "react";
import VolenteerHomepageWrapper from "./VolenteerHome.styles";
import TopbarUser from "../../Topbar/TopbarUser";
import Helpus from "../../../assets/images/Helpus.png";
import volenhome from "../../../assets/images/volenhome.png";


const VolenteerHomePage = () => {

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
                        <h2>WELCOME VOLENTEER</h2>
                    </div>
                </div>
            </div>

        </VolenteerHomepageWrapper>
    )
}

export default VolenteerHomePage;
