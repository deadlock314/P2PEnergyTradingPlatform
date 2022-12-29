import { useLayoutEffect, useState } from 'react';
import RootUrl from '../../Assets/RootURL';
import { getDataFromAPI } from '../../HelperFun/APImethods';
import './PackageList.css';
import PackageStruct from './PackageStruct';
import {Packages} from '../../Assets/dummydata';
import SearchBar from './SearchBar';
//static data
// import DataArray from '../../StaticInfo';

import Spinner from '../unitComponent/Spinner';




const PackageList = () => {

    const [loading, setLoading] = useState(true);
    const [packageList, setPackageList] = useState(Packages || []);

    useLayoutEffect(() => {
        getDataFromAPI(`${RootUrl}/getallpackage`).then((res) => {
            if (res) {
                setPackageList(res);
                setLoading(false);
            }
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
        <div className='main-packagelist-div'>
            <div className="searchbar-bg-div">

            <div className='packagelist-div-title'>
                <p>Nearby Seller</p>
            </div>
                        
                        <div className="main-search-div"><SearchBar/> </div>
            </div>
            { (packageList.length > 0 && !loading) ?
                        <div className="packagelist-div" >
                            {
                                packageList.map((userData) => <PackageStruct key={userData._id} props={userData} />)
                            }
                        </div>
                    : <Spinner/>
            }
         </div>
        </>
    );
}

export default PackageList;