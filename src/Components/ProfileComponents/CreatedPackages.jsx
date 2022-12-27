
import React from 'react'
import { Packages } from '../../Assets/dummydata';
import "./CreatedPackages.css";

function CreatedPackages({ state, type }) {

    const packageDataArr = Packages;
    const imgLink = "https://letstalkscience.ca/sites/default/files/2020-12/solar_power_illustration.png";
    const size=(type=="public")?4:2;

    return (
        <div className="createdpackage-main-div">
            {
                packageDataArr.slice(0, size).map((packageData) => {
                    return (
                        <div className={`${type}-createdpackage-struct-main-div`} >
                            <div className="createdpackage-struct-div1">
                                <div className={`createdpackage-data`} >
                                    <p>Duration :  {packageData.duration} days DailyLimit : {packageData.dailyLimit}</p>
                                    <p>Price : {packageData.price} Rs</p>
                                    <p>Active : {packageData.active ? "true" : "false"}</p>
                                </div>
                               {
                                 (type=="public") ? <button className="createdpackage-profile-purchase-btn">Purchase</button> :<></>
                               } 
                            </div>

                            <div className="createdpackage-struct-div2">
                                <img className="createdpackage-struct-infraimg" src={imgLink} />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default CreatedPackages