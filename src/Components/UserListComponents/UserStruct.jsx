import { useNavigate } from "react-router-dom";


const UserStruct = ({ props }) => {
console.log(props);

const redirect = useNavigate();

const imgLink="https://letstalkscience.ca/sites/default/files/2020-12/solar_power_illustration.png";

    return (
        <>

            <div className="userlist-struct-main-div" >
            <div  className="userlist-struct-div1">
                <div className="userlist-div-name-img" >
                    <img className="userlist-struct-profileimg" src={imgLink} onClick={()=>redirect(`/public/user/${props.ownerId.email}`)}/>
                    <div  >
                      <p className="userlist-struct-owner-name" > {props.ownerId.name}</p>
                     <p> {props.ownerId.email}</p>
                    </div>
                </div>
                <div className="userlist-div-address">
                <p> 
                   { `${props.ownerId.country} ${ props.ownerId.state} ${props.ownerId.city}
                    ${props.ownerId.pincode}`}
                </p>
                <p> {props.ownerId.landmark}</p>
            
                </div>
                <div className="userlist-div-btn">
               
                <div>
                <p>Duration :  {props.duration} days DailyLimit : {props.dailyLimit}</p>
                <p>Price : {props.price} Rs</p>
                </div>
              
                    <button className="purchase-btn">Purchase</button></div>
            </div>
            
                <div className="userlist-struct-div2">
                    <img className="userlist-struct-infraimg" src={imgLink} />
                </div>
            

            
                
            </div>
        </>
    );
}

export default UserStruct;