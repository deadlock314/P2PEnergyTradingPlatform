import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RootUrl from '../../Assets/RootURL';
import { getDataFromAPI, postDataToAPI } from '../../HelperFun/APImethods';
import { useDispatch } from 'react-redux';
import { changeUserAuth, setUserData } from '../../ReduxCode/Reducers';
import './CreatePackage.css';

function CreatePackage() {

    const redirect = useNavigate();
    const dispatch = useDispatch();


    const [packageData, setPackageData] = useState({ packType: '', duration: 0, price: 0, dailyLimit: 0 });
    const [packageResMes, setPackageResMes] = useState('');
    const [isPackageValid, setIsPackageValid] = useState(false);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setPackageData((user) => ({ ...user, [name]: value }));
    };




    const packageDataValidator = (res) => {
        return true;

        if (res.signedUp) {
            setPackageResMes('User succesfully signed up');
            alert("User succesfully signed up");
            getDataFromAPI(`${RootUrl}/user/${packageData.email}`).then((userdata) => {
                console.log(userdata);
                if (userdata.data) {
                    dispatch(changeUserAuth(true))
                    dispatch(setPackageDataData(userdata.data))
                    redirect(`/private/user/${userdata.data.userAccData._Id}`);
                }
                else {
                    setPackageResMes('Something went wrong try again');

                }
            })
        }
        else
            setPackageResMes('something went wrong try again');

        // if (res.isDuplicateUser)
        //     setPackageResMes('User already exist in database');
        // else if (res.isEmailSent)
        //     redirect('/signup/alphakey', { state: { ...user } })
        // else if (!res.isEmailSent)
        //     setPackageResMes('please enter correct email id')
        // else
        //     setPackageResMes('something went wrong try again');
    }


    const clickHandler = async (e) => {
        e.preventDefault();
        (isPackageValid) ?
            postDataToAPI(`${RootUrl}/addpackage`, user)
                .then(() => {
                    setPackageResMes("package added successfully");
                    redirect("/");
                }).catch((err) => {
                    console.log(err);
                    setPackageResMes('something went wrong try again');
                }) : (1 == 1)
    }


    return (


        <div className='create-package-form-div'>
            <form className="create-package-form">
                <p className='form-heading' >Package Details</p>

                <label className="create-package-form-label" htmlFor="packageType" > Package Type : </label>

                <select id="packageType">
                <option value="">Select Package Type</option>
                    <option value="Hour">Hour</option>
                    <option value="Day">Day</option>
                    <option value="Month">Month</option>
                    <option value="Flexiable">Flexiable</option>
                </select>

                <label className="create-package-form-label" htmlFor="duration" >Duration :</label>
                <input className="create-package-form-input" type="number" name="duration" id='duration' value={packageData.duration} onChange={changeHandler} />
                
                <label className="create-package-form-label" htmlFor="dailyLimit" > Daily Limit : </label>
                <input className="create-package-form-input" type='number' name="dailyLimit" id='dailylimit' value={packageData.dailyLimit} onChange={changeHandler} />

                <label className="create-package-form-label" htmlFor="price" > Price :</label>
                <input className="create-package-form-input" type='number' name="price" id='price' value={packageData.price} onChange={changeHandler} />
                
                <button className="create-package-form-btn" type='submit' onClick={clickHandler}>Create Package</button>

                <p id={(isPackageValid) ? "warn-message" : "success-message"}> {packageResMes}</p>

            </form>
        </div>

    );
}



export default CreatePackage;