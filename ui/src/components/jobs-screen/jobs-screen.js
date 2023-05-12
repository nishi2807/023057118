import React from "react";
import '../jobs-screen/jobs-screen.css'

function Jobs_Screen(){
    return(
        <div className="main-div">
            <div className="ps-title">Available Jobs</div>
            <div style={{display:"flex",width:"100%",height:"94%",}}>
                <div className="job-div">
                    <div className="Job"></div>
                </div>
                <div className="filter-div"></div>
            </div>
        </div>
    )
}

export default Jobs_Screen;