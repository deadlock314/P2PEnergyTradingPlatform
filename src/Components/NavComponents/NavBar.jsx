import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

library.add(faBars, faXmark, faSearch);

export default function NavBar() {

  const [navStatus, setNavStatus] = useState(false);

  const changeHandler = () => (navStatus) ? setNavStatus(false) : setNavStatus(true);
  let navicon = (navStatus) ? faXmark : faBars;

  return (
    <>
      <nav>

        <input type="checkbox" id="check" value={navStatus} onChange={changeHandler} />

        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={navicon} />
        </label>

       <Link to="/"> <div className="logo-companyname">
          <img className="navicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ceK4DRKMgME3VEXa-oi9IAQl8WiJkFsac3iIx0edOpU8T5RZKYKwTxSdpZrSo7LT_lA&usqp=CAU" />
          <p className="company-name">P2PEnergyTradingPlatform </p>
        </div></Link>
        
        <div className="nav-div1">
          <Link to="/signup" >Sign Up</Link>
        </div>
        <div className="nav-div2">
          <Link to="/login" >LogIn</Link>
        </div>


        {/* <div className="nav-div">
          <img id="nav-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_kv5K0jzuBD-u0Zoun7t7jxWJv4Wdmc6H2YuLnXC7L3WmVS7QToqrf8ivA8SMYmHBxg&usqp=CAU" />
          <p>Harshita Shukla</p>
        </div> */}

      </nav>
    </>

  )
}
