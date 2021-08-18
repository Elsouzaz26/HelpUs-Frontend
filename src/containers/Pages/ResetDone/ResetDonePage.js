import React from "react";
import ResetDonePageWrapper from './ResetDonePage.style';
import bgImage from '../../../assets/images/tick.jpg'

const ResetDonePage = () => {
    return (
        <ResetDonePageWrapper>
            <div className="container-fluid">
                <div className="sideCol">
                    <div className="col-3">
                        <h2>MBK Controls</h2>
                    </div>
                </div>
                    <div className="col-12 text-center">
                        <img src={bgImage}/>
                </div>
                    <div className="col-12 text-center">
                    <h3>Your Password Reset Is Successfully Completed.</h3>
                </div>
                <div className="text-center">
                    <a href="/" className="btn btn-primary">SignIn</a>
                </div>
            </div>
        </ResetDonePageWrapper>
    )
}

export default ResetDonePage;