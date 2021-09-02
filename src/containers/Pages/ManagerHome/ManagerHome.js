import React, { useState } from "react";
import HomepageWrapper from "./HomePage.styles";
import TopbarUser from "../../Topbar/TopbarUser";
import bgImage from "../../../assets/images/forgotpassword.png";
import { BackIcon1 } from "../../../assets/Icons";
import Helpus from "../../../assets/images/Helpus.png";
import senior from "../../../assets/images/seniorCard.png";
import volenteer from "../../../assets/images/volenteerCard.png";
import groups from "../../../assets/images/groupsCard.png";
import { useHistory } from "react-router-dom";
const HomePage = () => {
const history = useHistory();
const [cardColor,setCardColor]=useState("#DFE0EB")
const [cardColor1,setCardColor1]=useState("#DFE0EB")
const [cardColor2,setCardColor2]=useState("#DFE0EB")
const bgEnter=()=>{
  setCardColor(" #0275D8")
}
const bgLeaver=()=>{
  setCardColor("#DFE0EB")
}
const bgEnter1=()=>{
  setCardColor1(" #0275D8")
}
const bgLeaver1=()=>{
  setCardColor1("#DFE0EB")
}

const bgEnter2=()=>{
  setCardColor2(" #0275D8")
  
}
const bgLeaver2=()=>{
  setCardColor2("#DFE0EB")
}
const allSeniorsView = (event) => {
  history.push("/dashboard/senior/view");
}
const addASeniorView = (event) => {
  history.push('/dashboard/senior/add');
}
const editASeniorView = (event) => {
  history.push("/dashboard/senior/view");
}
const allVolenteerView = (event) => {
  history.push("/dashboard/volenteer/view");
}
const addAVolenteerView = (event) => {
  history.push('/dashboard/volenteer/add');
}
const editAVolenteerView = (event) => {
  history.push("/dashboard/volenteer/view");
}


  return (
    <HomepageWrapper>
      <div className="container">
        <div className="row ">
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

        <div className="row mt-3">
          {" "}
          <div className="col-md-12 text-center ">
            {" "}
            <h2 style={{fontWeight:"bold"}}>HOW DO YOU WANT TO HELP US?</h2>
          </div>
        </div>
        <div className="row mt-2 mb-5 ">
          <div className="col-md-4">
            <div class="card "onMouseEnter={bgEnter} onMouseLeave={bgLeaver} style={{ background:`${cardColor}`,height:"35.5rem"}}>
              <img class="card-img-top" src={senior} alt="Card image cap" />
              <h3 className="text-center">SENIOR</h3>
             <div className="p-2 mt-5">
                <a class="btn btn-light w-100" onClick={allSeniorsView}>
                  ALL SENIORS VIEW
                </a>
                <a class="btn btn-light w-100 mt-2" onClick={addASeniorView}>
                  ADD A SENIOR
                </a>
                <a onClick={editASeniorView} class="btn btn-light w-100 mt-2 ">
                  EDIT A SENIOR
                </a>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card  " onMouseEnter={bgEnter1} onMouseLeave={bgLeaver1} style={{ background:`${cardColor1}`,height:"35.5rem" }}>
              <img class="card-img-top" src={volenteer} alt="Card image cap" />
              <h3 className="text-center">VOLENTEER</h3>
              <div className="p-2 mt-5">
                <a onClick={allVolenteerView} class="btn btn-light w-100">
                  ALL VOLENTEER VIEW
                </a>
                <a onClick={addAVolenteerView} class="btn btn-light w-100 mt-2 ">
                  ADD A VOLENTEER
                </a>
                <a onClick={editAVolenteerView} class="btn btn-light w-100 mt-2 ">
                  EDIT A VOLENTEER
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card  " onMouseEnter={bgEnter2} onMouseLeave={bgLeaver2}style={{ background:`${cardColor2}`,height:"35.5rem"  }}>
              <img class="card-img-top" src={groups} alt="Card image cap" />
              <h3 className="text-center">DISTRIBUTION</h3>
              <div className="p-2 mt-5">
                <a href="dashboard/groups/view" class="btn btn-light w-100">
                  ALL DISTRIBUTION VIEW
                </a>
                <a href="dashboard/groups/add" class="btn btn-light w-100 mt-2 ">
                  ADD A DISTRIBUTION
                </a>
                <a href="dashboard/groups/edit" class="btn btn-light w-100 mt-2 ">
                  RENEW/EDIT A DISTRIBUTION
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5"></div>
      </div>
      
    </HomepageWrapper>
  );
};

export default HomePage;
{
  /* <img height="400px" style={{marginTop:"-70px"}}
width=" 400px"

 src={Helpus} /> */
}
