

const UserStruct = ({ props }) => {
console.log(props);

    return (
        <>
            <div className="userlist-struct-main-div">
                <img className="userlist-struct-infraimg" src={props.PackageImgLink} />
                <p>unitPrice : {props.unitPrice}</p>
                <p>Duration :  {props.duration}</p>
                <p>DailyLimit : {props.dailyLimit}</p>
            </div>
        </>
    );
}

export default UserStruct;