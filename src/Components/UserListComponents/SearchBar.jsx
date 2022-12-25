import React from 'react';
import './SearchBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars, faXmark, faSearch, faUserCircle, faBell);

function SearchBar() {
  return (
    <div className="main-searchbar">
        <div>
        <select className="search-dropdown">
                <option value="">State</option>
                    <option value="Hour">Price</option>
                    <option value="Day">Duration</option>
                    <option value="Month">Location</option>
                    <option value="Flexiable">Owner</option>
        </select>
        <select className="search-dropdown">
                <option value="">City</option>
                    <option value="Hour">Price</option>
                    <option value="Day">Duration</option>
                    <option value="Month">Location</option>
                    <option value="Flexiable">Owner</option>
        </select>
            
        <select className="search-dropdown">
                <option value="">Select Search Parameter</option>
                    <option value="Hour">Price</option>
                    <option value="Day">Duration</option>
                    <option value="Flexiable">Owner</option>
        </select>
        <div className="search-input-div">
        <FontAwesomeIcon icon={faSearch}/>
            <input className="searchbar-input" type="text" placeholder="type here to search" />
        </div>
        <select className="search-dropdown">
                <option value="">Sort By </option>
                    <option value="Hour">Price</option>
                    <option value="Day">Duration</option>
        </select>
        </div>
        <div>
        
        

        </div>

    </div>
  )
}

export default SearchBar;