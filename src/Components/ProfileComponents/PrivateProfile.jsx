import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import RootUrl from '../../Assets/RootURL';
import { postDataToAPI } from '../../HelperFun/APImethods';
import { changeUserAuth } from '../../ReduxCode/Reducers';
import './Profile.css';
import { Users } from "../../Assets/dummydata";
import CreatedPackages from './CreatedPackages';
import profileBgImg from "../../Assets/profile-bg.jpg";

export default function PrivateProfile() {
	const redirect = useNavigate();
	const dispatch = useDispatch();
	const userData = Users[0];

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

	const profileImgLink="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMG1hbiUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";


	// metaMaskAddress
	// maxOutput
	// availableOutput
	// contact
	// verifiedContact
	// buyFrom:
	// sellTo:



	return (
		<div className='profile-main-div'>
			<div className="profile">
				<img className="profile-background-img" src={profileBgImg} />
				<div className="profile-upper-div">
					<div>
						<img className="profile-main-img" src={profileImgLink} />
						<p className="profile-user-name" >{userData.name}</p>
					</div>
					<div className="profile-contact-div">
						<p>{userData.email}</p>
						<p>+91 {userData.contact}</p>
					</div>
				</div>
				<div className="profile-address-div" >
					<p>
						{`${userData.country} ${userData.state} ${userData.city}
                    ${userData.pincode}`}
					</p>
					<p> {userData.landmark}</p>
				</div>
				<p></p>
			</div>
			<div className="profile-second-div">
				<div className="profile-nav-div">

					<p className='profile-nav-links'  >Settings</p>
					{

						(userData.verifiedMail) ? <></> :
							<p className='profile-nav-links' onClick={SendOTP} >Verify Mail</p>

					}

					{
						(userData.isNode) ? <>
							<p>Active Contacts</p>
							<p>Contract Requests</p>
							<p>Wallet</p></> :
							<>
								<a className='profile-nav-links' href="https://metamask.io/" >Create Wallet</a>
								<p className='profile-nav-links' onClick={ConnetWallet} >Connect Wallet</p>
							</>

					}

					<p className='profile-nav-links' onClick={LogoutHandler} >Logout</p>

				</div>
				<div className="package-struct-main-div" >
					<p className="package-struct-title" >Packages</p>
					<CreatedPackages state={userData.createdPackages} type="private" />
					<p className='profile-nav-links profile-left-nav-links' >See more</p>
				</div>

			</div>



		</div>

	)
}
