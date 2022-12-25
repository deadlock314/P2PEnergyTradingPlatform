import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import RootUrl from '../../Assets/RootURL';
import { postDataToAPI } from '../../HelperFun/APImethods';
import { changeUserAuth } from '../../ReduxCode/Reducers';
import './PrivateProfile.css';

export default function PrivateProfile() {
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const SendOTP = (e) => {
    e.preventDefault();
    postDataToAPI(`${RootUrl}/sendotp`).then((res) => {
      redirect("/authotp");
    }).catch((err) => {
      redirect("/");
    })
  }

  const LogoutHandler = (e) => {
    e.preventDefault();
    dispatch(changeUserAuth(false));
    document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    redirect("/");
  }

  const ConnetWallet = (e) => {
    e.preventDefault();
    // dispatch(changeUserAuth(false));
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(res => {
        console.log(res)
      })
  };

  const imgLink="https://letstalkscience.ca/sites/default/files/2020-12/solar_power_illustration.png";


  return (
    <div className='profile-main-div'>
      <img src={imgLink}/>
      <div>PrivateProfile</div>
      <button className='profile-btn' onClick={SendOTP} >Verify Mail</button>
      <a className='profile-btn' href="https://metamask.io/" >Create Wallet</a>
      <button className='profile-btn' onClick={ConnetWallet} >Connect Wallet</button>
      <button className='profile-btn' onClick={LogoutHandler}>LogOut</button>

    </div>

  )
}
