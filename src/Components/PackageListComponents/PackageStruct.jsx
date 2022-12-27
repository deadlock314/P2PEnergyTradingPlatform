import { useNavigate } from "react-router-dom";


const PackageStruct = ({ props }) => {
console.log(props);

const redirect = useNavigate();

const imgLink="https://letstalkscience.ca/sites/default/files/2020-12/solar_power_illustration.png";

    return (
        <>

            <div className="packagelist-struct-main-div" >
            <div  className="packagelist-struct-div1">
                <div className="packagelist-div-name-img" >
                    <img className="packagelist-struct-profileimg" src={imgLink} onClick={()=>redirect(`/publicview/user/${props.ownerId.email}`)}/>
                    <div  >
                      <p className="packagelist-struct-owner-name" > {props.ownerId.name}</p>
                     <p> {props.ownerId.email}</p>
                    </div>
                </div>
                <div className="packagelist-div-address">
                <p> 
                   { `${props.ownerId.country} ${ props.ownerId.state} ${props.ownerId.city}
                    ${props.ownerId.pincode}`}
                </p>
                <p> {props.ownerId.landmark}</p>
            
                </div>
                <div className="packagelist-div-btn">
               
                <div>
                <p>Duration :  {props.duration} days DailyLimit : {props.dailyLimit}</p>
                <p>Price : {props.price} Rs</p>
                </div>
              
                    <button className="purchase-btn">Purchase</button></div>
            </div>
            
                <div className="packagelist-struct-div2">
                    <img className="packagelist-struct-infraimg" src={imgLink} />
                </div>
            

            
                
            </div>
        </>
    );
}

export default PackageStruct;