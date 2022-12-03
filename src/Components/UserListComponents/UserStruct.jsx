

const UserStruct = ({ props }) => {


    return (
        <>
            <div className="userlist-struct-main-div">
                <img className="userlist-struct-infraimg" src={props.InfraImgLink} />
                <p>{props.address.city}</p>
                <p>{props.address.landmark}</p>
                <p>{props.availableOutput}</p>
            </div>
        </>
    );
}

export default UserStruct;