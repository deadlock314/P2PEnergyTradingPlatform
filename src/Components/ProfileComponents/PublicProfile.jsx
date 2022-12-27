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

	const profileImgLink = "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMG1hbiUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";


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
				<div className="public-profile-nav-div">

					{

						(userData.verifiedMail) ? <><p>Verified Mail</p></> :
							<p>Unverified Mail</p>

					}

					{
						(userData.isNode) ? <>
							<p>Verified Wallet</p></> :
							<>
								<p>Unverified Wallet</p>
							</>

					}


				</div>
				<div className="public-package-struct-main-div" >
					<p className="package-struct-title" >Packages</p>
					<CreatedPackages state={userData.createdPackages} type="public" />
					<p className='profile-nav-links profile-left-nav-links' >See more</p>
				</div>

			</div>



		</div>

	)
}