import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RootUrl from '../../Assets/RootURL';
import { postDataToAPI } from '../../HelperFun/APImethods';
import './FormStyles.css';


function AuthOtp() {

    const urlData = useLocation();
    const redirect = useNavigate()
    const [localOtp, setLocalOtp] = useState('');
    const [authMes, setAuthMes] = useState('');
    const [loading,setLoading] =useState(false);

    const changeHandler = (e) => setLocalOtp(e.target.value);
    

    const authResHandler = (res) => {
        if (res.emailverified ) {
            alert('user succesfully verified account');
            redirect("/");
        }
        else if (!res.emailverified)
            setAuthMes('Enter correct otp');
        else
            setAuthMes('something went wrong try again');
    }


    // const ResendOTPFun=(e)=>{

    // }

    const VerifySignup = async (e) => {
        e.preventDefault();
         postDataToAPI(`${RootUrl}/verifymail`, {  otp: localOtp })
         .then((res)=>authResHandler(res)).catch ((err)=> {
            console.log(err);
            setAuthMes('something went wrong try again');
        });
    }

    return (
        (loading) ? <></> :
            <div className="img-form-main">
                <img className="img-form" src="https://www.vassallogroupmalta.com/wp-content/uploads/2017/12/Powerezi-1200x750.jpg" />
                <div className='auth-wrapper'>
                    <form className="form">
                        <h3 htmlFor='localOtp' id='auth-otp-label'>Email verification OTP </h3>
                        <label><input className='otp' name='otp' type='text' value={localOtp} onChange={changeHandler} /></label>
                        <button type="submit" onClick={VerifySignup} >Verify User</button>
                        <p id="warn-message"> {authMes}</p>
                        <p id='auth-otp-para'>We just send your OTP via your <br />email
                                     <span id='auth-otp-email'>{(urlData.state) ? urlData.state.email : ''}</span> </p>
                        <p id='auth-otp-para2'>The code will expire soon so Hurry up..</p>
                        <button id='auth-otp-resend-btn' >Resend OTP</button>
                    </form>
                </div>

            </div>);

}
export default AuthOtp;