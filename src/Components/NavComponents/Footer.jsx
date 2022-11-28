import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare , faInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare ,faInstagram,faLinkedin);

const Footer=()=> {

    return ( 
        <>
        <footer>
        <div className='footer-outerarea'>
        <div className='footer-col'>
            <div className='footer-row'>
                <p className='footer-subtitle'>About</p>
                <ul className='footer-list'>
                    <li><Link to='/' className='footer-li-item'> About Us</Link> </li>
                    <li><Link to='/' className='footer-li-item'> Press Releases </Link> </li>
                    <li><Link to='/' className='footer-li-item'> Careers </Link> </li>
                </ul>
            </div>
            <div className='footer-row'>
                <p className='footer-subtitle'>Help</p>
                <ul className='footer-list'>
                    <li><Link to='/' className='footer-li-item'> Privacy Policy</Link> </li>
                    <li><Link to='/' className='footer-li-item'> Report </Link> </li>
                    <li><Link to='/' className='footer-li-item'> Terms & conditions </Link> </li>
                    <li><Link to='/' className='footer-li-item'> FAQ </Link> </li>
                </ul>
            </div>
            <div className='footer-row'>
                <p className='footer-subtitle'>Connect With us</p>
                <ul className='footer-li-icontainer'>
                    <li><a className='footer-li-icon' href='https://facebook.com' target='_blank'> <FontAwesomeIcon icon={faFacebookSquare} /></a> </li>
                    <li><a className='footer-li-icon' href='https://instagram.com' target='_blank'> <FontAwesomeIcon icon={faInstagram} /></a> </li>
                    <li><a className='footer-li-icon' href='https://linkedin.com' target='_blank'> <FontAwesomeIcon icon={faLinkedin} /></a> </li>
                    <li><a className='footer-li-icon' href='mailto:chandansoni2270@gmail.com'target='_blank' > <FontAwesomeIcon icon={faEnvelope} /></a> </li>
                </ul>
            </div>   
        </div>
        </div>
        <p id='cpright'>  &copy; Copyright { new Date().getFullYear()} P2PEnergyTradingPlatform</p>
        </footer>
        </>
     );
}

export default Footer;