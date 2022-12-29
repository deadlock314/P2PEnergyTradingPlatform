import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RootUrl from '../../Assets/RootURL';
import { getDataFromAPI, postDataToAPI } from '../../HelperFun/APImethods';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAuth, setUserData } from '../../ReduxCode/Reducers';
import './AdditionalInfo.css';

function AdditionalInfo() {

    const redirect = useNavigate();
    const dispatch = useDispatch();

    const userData=useSelector((state)=>state.userAuth)||{principalSubdivision:"",city:""};



    const [additionalInfo, setAdditionalInfo] = useState({ country: userData.locationData.response.countryName,
                 state: userData.locationData.response.principalSubdivision, city: userData.locationData.response.city, pincode: 0 ,landmark:"",contact:"+91 "});

    const [AdditionalInfoResMes, setAdditionalInfoResMes] = useState('');
    const [isAdditionalInfoValid, setIsAdditionalInfoValid] = useState(true);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setAdditionalInfo((user) => ({ ...user, [name]: value }));
    };




    // const additionalInfoValidator = (res) => {
    //     return true;

    //     if (res.signedUp) {
    //         setAdditionalInfoResMes('User succesfully signed up');
    //         alert("User succesfully signed up");
    //         getDataFromAPI(`${RootUrl}/user/${additionalInfo.email}`).then((userdata) => {
    //             console.log(userdata);
    //             if (userdata.data) {
    //                 dispatch(changeUserAuth(true))
    //                 dispatch(setAdditionalInfoData(userdata.data))
    //                 redirect(`/private/user/${userdata.data.userAccData._Id}`);
    //             }
    //             else {
    //                 setAdditionalInfoResMes('Something went wrong try again');

    //             }
    //         })
    //     }
    //     else
    //         setAdditionalInfoResMes('something went wrong try again');

        // if (res.isDuplicateUser)
        //     setAdditionalInfoResMes('User already exist in database');
        // else if (res.isEmailSent)
        //     redirect('/signup/alphakey', { state: { ...user } })
        // else if (!res.isEmailSent)
        //     setAdditionalInfoResMes('please enter correct email id')
        // else
        //     setAdditionalInfoResMes('something went wrong try again');
    // }


    const clickHandler = async (e) => {

        e.preventDefault();

        (isAdditionalInfoValid) ?
            postDataToAPI(`${RootUrl}/updateuseraddress`, additionalInfo)
                .then(() => {
                    setAdditionalInfoResMes("Additional Info added successfully");
                    dispatch(setUserData(additionalInfo)); 
                    redirect(`/private/user/${userData.userData.email}`);
                }).catch((err) => {
                    console.log(err);
                    setAdditionalInfoResMes('something went wrong try again');
                }) : (1 == 1)
    }


    return (

        <div className='additional-info-form-div'>
            <form className="additional-info-form">
                <p className='additional-info-form-heading' >Additional Details</p>

                <label className="additional-info-form-label" htmlFor="country" >Country :</label>
                <input className="additional-info-form-input" type="text" name="country" id='country' value={additionalInfo.country} onChange={changeHandler} />
                
                <label className="additional-info-form-label" htmlFor="state" > State : </label>
                <input className="additional-info-form-input" type='text' name="state" id='state' value={additionalInfo.state} onChange={changeHandler} />

                <label className="additional-info-form-label" htmlFor="city" > City :</label>
                <input className="additional-info-form-input" type='text' name="city" id='city' value={additionalInfo.city} onChange={changeHandler} />

                <label className="additional-info-form-label" htmlFor="pincode" > Pincode :</label>
                <input className="additional-info-form-input" type='text' name="pincode" id='pincode' value={additionalInfo.pincode} onChange={changeHandler} />

                <label className="additional-info-form-label" htmlFor="landmark" > Landmark :</label>
                <input className="additional-info-form-input" type='text' name="landmark" id='landmark' value={additionalInfo.landmark} onChange={changeHandler} />

                <label className="additional-info-form-label" htmlFor="contact" > Contact :</label>
                <input className="additional-info-form-input" type='text' name="contact" id='contact' value={additionalInfo.contact} onChange={changeHandler} />
                
                <button className="additional-info-form-btn" type='submit' onClick={clickHandler}>Submit</button>

                <p id={(isAdditionalInfoValid) ? "warn-message" : "success-message"}> {AdditionalInfoResMes}</p>

            </form>
        </div>

    );
}



export default AdditionalInfo;