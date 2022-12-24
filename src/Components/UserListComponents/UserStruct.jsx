import { redirect, useNavigate } from "react-router-dom";


const UserStruct = ({ props }) => {
console.log(props);

const redirect = useNavigate();

const imgLink="https://avatars.githubusercontent.com/u/1777722?s=200&v=4";

    return (
        <>

            <div className="userlist-struct-main-div" >
            <div  className="userlist-struct-div1">
                <div className="userlist-div-name-img" >
                    <img className="userlist-struct-profileimg" src={imgLink} onClick={()=>redirect(`/public/user/${props.ownerId.email}`)}/>
                    <div >
                      <p >Name : {props.ownerId.name}</p>
                     <p> {props.ownerId.email}</p>
                    </div>
                </div>
                <div>
                <p> 
                   { `${props.ownerId.country} ${ props.ownerId.state} ${props.ownerId.city}
                    ${props.ownerId.pincode} ${props.ownerId.landmark}`}
                </p>
            
                </div>
                <div>
               
                <p>Duration :  {props.duration} days DailyLimit : {props.dailyLimit}</p>
                <p>Price : {props.price} Rs</p>
            
                </div>
            </div>
            
                <div className="userlist-struct-div2">
                    <img className="userlist-struct-infraimg" src={imgLink} />
                </div>
            

            
                
            </div>
        </>
    );
}

export default UserStruct;