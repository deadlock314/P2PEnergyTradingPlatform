import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

library.add(faBars, faXmark, faSearch, faUserCircle, faBell);

export default function NavBar() {

  const [navStatus, setNavStatus] = useState(false);

  const changeHandler = () => (navStatus) ? setNavStatus(false) : setNavStatus(true);
  let navicon = (navStatus) ? faXmark : faBars;

  const reduxState = useSelector((state) => state);
  const auth = reduxState.userAuth.value;
  

  return (
    <>
      <div className="nav-div">
        <nav>

          <input type="checkbox" id="check" value={navStatus} onChange={changeHandler} />

          <label htmlFor="check" className="checkbtn">
            <FontAwesomeIcon icon={navicon} />
          </label>

          <Link to="/"> <div className="logo-companyname">
            <img className="navicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ceK4DRKMgME3VEXa-oi9IAQl8WiJkFsac3iIx0edOpU8T5RZKYKwTxSdpZrSo7LT_lA&usqp=CAU" />
            <p className="company-name">P2PEnergyTradingPlatform </p>
          </div>
          </Link>

          {
            (auth) ?
              <> 
              <div className="nav-div4">
                <Link to="/notifications" >  <FontAwesomeIcon icon={faBell} />
                </Link>
              </div>
                <div className="nav-div3">
                  <Link to="private/user/1234" >  <FontAwesomeIcon icon={faUserCircle} />
                  </Link>
                </div>

              </> : <>
                <div className="nav-div1">
                  <Link to="/signup" >Sign Up</Link>
                </div>
                <div className="nav-div2">
                  <Link to="/login" >LogIn</Link>
                </div>
              </>
          }


        </nav>
      </div>
    </>

  )
}
