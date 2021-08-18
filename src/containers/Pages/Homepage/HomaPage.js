import React from "react";
import ForgotPasswordWrapper from "./ForgotPasswordPage.styles";
import TopbarUser from "../../Topbar/TopbarUser";
import bgImage from "../../../assets/images/forgotpassword.png";
import { BackIcon1 } from "../../../assets/Icons";
import Helpus from "../../../assets/images/Helpus.png";
import senior from "../../../assets/images/seniorCard.png";
import volenteer from "../../../assets/images/volenteerCard.png";
import groups from "../../../assets/images/groupsCard.png";
const ForgotPasswordPage = () => {
  return (
    <ForgotPasswordWrapper>
      <div className="container">
        <div className="row ">
          <div className="col-md-6"></div>
          <div className="col-md-6 mt-4 text-right"><TopbarUser /></div>
        </div>
     
<div className="row">
  <div className="col-12 ">
<img className="img1" src={Helpus}/>
  </div>

</div>

        <div className="row mt-4">
          {" "}
          <div className="col-md-12 text-center ">
            {" "}
            <h2>HOW DO YOU WANT TO HELP</h2>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4">
            <div class="card " style={{ background: " #C9CED6" }}>
              <img class="card-img-top" src={senior} alt="Card image cap" />
              <h3 className="text-center">Senior</h3>
              <div
                class="card-body text-center mt-5"
                style={{ background: " #C9CED6", height: "15.8rem" }}
              >
                <a href="#" class="btn btn-light w-100">
                  ALL SENIORS VIEW
                </a>
                <a href="#" class="btn btn-light w-100 mt-2 ">
                  ADD A SENIOR
                </a>
                <a href="#" class="btn btn-light w-100 mt-2 ">
                  EDIT A SENIOR
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card  " style={{ background: " #DFE0EB" }}>
              <img class="card-img-top" src={volenteer} alt="Card image cap" />
              <h3 className="text-center">Volenteer</h3>
              <div
                class="card-body mt-5"
                style={{ background: " #DFE0EB", height: "15rem" }}
              >
                <a href="#" class="btn btn-light w-100">
                  ALL VOLENTEER VIEW
                </a>
                <a href="#" class="btn btn-light w-100 mt-2 ">
                  ADD A VOLENTEER
                </a>
                <a href="#" class="btn btn-light w-100 mt-2 ">
                  EDIT A VOLENTEER
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card  " style={{ background: " #0275D8" }}>
              <img class="card-img-top" src={groups} alt="Card image cap" />
              <h3 className="text-center">Groups</h3>
              <div
                class="card-body mt-5"
                style={{ background: " #0275D8", height: "15rem" }}
              >
                <a href="#" class="btn btn-light w-100">
                  ALL GROUPS VIEW
                </a>
                <a href="#" class="btn btn-light w-100 mt-2 ">
                  ADD A GROUP
                </a>
                <a href="#" class="btn btn-light w-100 mt-2 ">
                  EDIT A GROUP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ForgotPasswordWrapper>
  );
};

export default ForgotPasswordPage;
{
  /* <img height="400px" style={{marginTop:"-70px"}}
width=" 400px"

 src={Helpus} /> */
}
