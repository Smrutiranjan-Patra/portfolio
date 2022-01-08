import React from "react";
import "./css/resume.css";

const Resume = () => {

    return (<div className="resume" id="Resume">
        <h1 className="page-header">Resume</h1>
        <hr />
        <h6 className="page-subheader3"> My formal Bio Details</h6>

        <div className="bdetails">
            <ul>
                <li>Masai School</li>
                <h6>Full Stack Web Development</h6>
                <p className="year">2021-Present</p>
                <li>Utkalmani Gopabandhu Smruti Mahavidalay</li>
                <h6>Bachlore Of Commerce</h6>
                <p className="year">2017-2021</p>
                <li>Samanta Chandra Sekher Junior Collage</li>
                <h6>Intermediate</h6>
                <p className="year">2015-2015</p>
            </ul>
            <a href="https://drive.google.com/file/d/12DQWhxr2c37QKJOyq8Xs8Kq5dbMdV_wU/view?usp=sharing">
                <button id="resume-btn" target="_blank"> Resume</button>
            </a>
        </div>
    </div>
    )
}

export { Resume } 