import { useEffect, useState } from 'react';
import RootUrl from '../../Assets/RootURL';
import { getDataFromAPI } from '../../HelperFun/APImethods';
import './UserList.css';
import UserStruct from './UserStruct';
import {Packages} from '../../Assets/dummydata';

//static data
// import DataArray from '../../StaticInfo';

import { useParams } from 'react-router-dom';



const UserList = () => {

    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState(Packages || []);

    const userType = useParams().usertype;

    useEffect(() => {
        // getDataFromAPI(RootUrl).then((res) => {
        //     if (res) {
        //         setUserList(res);
        setLoading(false);
        //     }
        // }).catch((err) => {
        //     console.log(err);
        // })
    }, []);

    return (
        <>
            {
                (userList.length > 0 && !loading) ?
                    <div className='main-userlist'>
                        <p className='userlist-div-title'>Nearby {userType}</p>

                        <div className="userlist-div" >
                            {
                                userList.map((userData) => <UserStruct key={userData._id} props={userData} />)
                            }
                        </div>



                    </div> : <></>
            }

        </>
    );
}

export default UserList;