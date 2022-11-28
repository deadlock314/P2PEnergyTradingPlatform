import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './NavBar.css';


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

        <div className="logo-companyname">
          <img className="navicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ceK4DRKMgME3VEXa-oi9IAQl8WiJkFsac3iIx0edOpU8T5RZKYKwTxSdpZrSo7LT_lA&usqp=CAU" />
          <p className="company-name">P2PEnergyTradingPlatform </p>
        </div>


        <div className="profile-div">
          <img id="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_kv5K0jzuBD-u0Zoun7t7jxWJv4Wdmc6H2YuLnXC7L3WmVS7QToqrf8ivA8SMYmHBxg&usqp=CAU" />
          <p>Harshita Shukla</p>
        </div>

      </nav>
    </>

  )
}
