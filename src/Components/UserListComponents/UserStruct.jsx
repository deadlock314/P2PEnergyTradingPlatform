

const UserStruct = ({ props }) => {


    return (
        <>
            <div className="userlist-struct-main-div">
                {/* <img className="userlist-struct-infraimg" src={props.InfraImgLink} /> */}
                <p>{props.unitPrice}</p>
                <p>{props.duration}</p>
                <p>{props.dailyLimit}</p>
            </div>
        </>
    );
}

export default UserStruct;