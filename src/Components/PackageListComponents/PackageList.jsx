import { useEffect, useState } from 'react';
// import RootUrl from '../../Assets/RootURL';
// import { getDataFromAPI } from '../../HelperFun/APImethods';
import './PackageList.css';
import PackageStruct from './PackageStruct';
import {Packages} from '../../Assets/dummydata';
import SearchBar from './SearchBar';
//static data
// import DataArray from '../../StaticInfo';

import { useParams } from 'react-router-dom';




const PackageList = () => {

    const [loading, setLoading] = useState(true);
    const [packageList, setPackageList] = useState(Packages || []);

    const userType = useParams().usertype;






    useEffect(() => {
        // getDataFromAPI(RootUrl).then((res) => {
        //     if (res) {
        //         setPackageList(res);
        setLoading(false);
        //     }
        // }).catch((err) => {
        //     console.log(err);
        // })
    }, []);

    return (
        <>
        <div className='main-packagelist-div'>
            <div className="searchbar-bg-div">

            <div className='packagelist-div-title'>
                <p>Nearby {userType}</p>
            </div>
                        
                        <div className="main-search-div"><SearchBar/> </div>
            </div>
            { (packageList.length > 0 && !loading) ?
                        <div className="packagelist-div" >
                            {
                                packageList.map((userData) => <PackageStruct key={userData._id} props={userData} />)
                            }
                        </div>
                    : <></>
            }
         </div>
        </>
    );
}

export default PackageList;