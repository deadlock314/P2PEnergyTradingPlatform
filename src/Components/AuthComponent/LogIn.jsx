import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './FormStyles.css';
import {changeUserAuth,setUserData} from '../../ReduxCode/Reducers';
import RootUrl from '../../Assets/RootURL';
import { getDataFromAPI, postDataToAPI } from '../../HelperFun/APImethods';
import Spinner from '../unitComponent/Spinner';


const LogIn = () => {

    const redirect = useNavigate();
    const dispatch=useDispatch();

    const [loading, setLoading] = useState(false);
    const [loggedInMes, setLoggedInMes] = useState('');

    let [user, setUser] = useState({ email: '', password: '' });
    const changeHandler = e => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
    };

    const loginResHandler = (res) => {

        if (res.loggedIn) {
            // document.cookie=`jwt=${res.jwt}; Path=/; maxAge:3600*1000;`;
            alert('user succesfully Logged-In')
            setLoading(true);
            setUser({ email: '', password: '' })
            getDataFromAPI(`${RootUrl}/private/getuserdata`).then((userdata) => {
                if (!userdata.isError) {
                    dispatch(changeUserAuth(true))
                    dispatch(setUserData(userdata.data)) 
                    redirect(`/private/user/${userdata.data.email}`);
                }
                else{
                    setLoggedInMes('Something went wrong try again');
                    
                }
            })
        }
        else
            setLoggedInMes('Enter correct email and password');

        // if (res.isUserLoggedIn && res.isCorrectPassword) {
        //     alert('user succesfully Logged-In')
        //     setLoading(true)
        //     setUser({ email: '', password: '' })
        //     getDataFromAPI(`${RootUrl}/user/${res._id}`).then((userdata) => {
        //         if (userdata.data) {
        //             // dispatch(changeUserAuth(true))
        //             // dispatch(setUserData(userdata.data)) 
        //             redirect(`/user/${userdata.data.userAccData._Id}`);
        //         }
        //     })
        // }
        // else if (!res.isCorrectPassword && !res.isCorrectUser)
        //     setLoggedInMes('Enter correct email and password');
        // else if (!res.isUserLoggedIn && !res.isCorrectPassword)
        //     setLoggedInMes('Please enter correct password')
        // else
        //     setLoggedInMes('Something went wrong try again');

    }

    const clickHandler = async (e) => {
        e.preventDefault();
        postDataToAPI(`${RootUrl}/login`, user)
            .then((res) => loginResHandler(res)).catch((err) => {
                console.log(err);
                setLoggedInMes('something went wrong try again');
            });
    }



    return (
        <>
            {
                (loading) ?
                    <Spinner/> :
                    <div className="img-form-main">

                        <img className="img-form"
                            src="https://www.vassallogroupmalta.com/wp-content/uploads/2017/12/Powerezi-1200x750.jpg" />

                        <div className='auth-wrapper'>
                            <form className="form">

                                <p className='form-heading' >LogIn</p>

                                <label className="auth-form-label" htmlFor="email" >Email :
                                    <input className="auth-form-input" type="email" name="email" id='email' value={user.email} onChange={changeHandler} />
                                </label>

                                <label className="auth-form-label" htmlFor="password" > Password :
                                    <input className="auth-form-input" type='password' name="password" id='password' value={user.password} onChange={changeHandler} />
                                </label>

                                <Link id='fpass' to='/forgotpassword'>Forgot your password</Link>
                                <button type='submit' onClick={clickHandler}>LogIn</button>

                                <p id="warn-message"> {loggedInMes}</p>
                                <p className="form-bottom-text" >Didn't have any account ?<Link className='auth-link' to='/signup'> Sign Up</Link></p>
                                <p className="form-bottom-text">Right Now and save the energy </p>
                            </form>
                        </div>
                    </div>
            }
        </>


    );
}

export default LogIn;