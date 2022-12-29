import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './FormStyles.css';
import RootUrl from '../../Assets/RootURL';
import { getDataFromAPI, postDataToAPI } from '../../HelperFun/APImethods';
import { useDispatch } from 'react-redux';
import {changeUserAuth,setUserData} from '../../ReduxCode/Reducers';



function SignUp() {
    const redirect = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [signedUpMes, setSignedUpMes] = useState('');
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
    };
    const dispatch=useDispatch();



    const signupResHandler = (res) => {
       
        if (res.signedUp){
            setSignedUpMes('User succesfully signed up');
            alert("User succesfully signed up");
            getDataFromAPI(`${RootUrl}/private/getuserdata`).then((userdata) => {
                if (!userdata.isError) {
                    dispatch(changeUserAuth(true))
                    dispatch(setUserData(userdata.data)) 
                    redirect(`/private/user/${userdata.data.email}`);
                }
                else{
                    setSignedUpMes('Something went wrong try again');
                    
                }
            })
        }
        else
            setSignedUpMes('something went wrong try again');

        // if (res.isDuplicateUser)
        //     setSignedUpMes('User already exist in database');
        // else if (res.isEmailSent)
        //     redirect('/signup/alphakey', { state: { ...user } })
        // else if (!res.isEmailSent)
        //     setSignedUpMes('please enter correct email id')
        // else
        //     setSignedUpMes('something went wrong try again');
    }


    const clickHandler = async (e) => {
        e.preventDefault();
        postDataToAPI(`${RootUrl}/signup`, user)
        .then((res) => signupResHandler(res)).catch ((err)=> {
           console.log(err);
           setSignedUpMes('something went wrong try again');
       });
    }

    return (

        <div className="img-form-main">
        <img className="img-form" src="https://www.vassallogroupmalta.com/wp-content/uploads/2017/12/Powerezi-1200x750.jpg" />
        <div className='auth-wrapper'>
            <form className="form">
            <p className='form-heading' >Register</p>
                <label className="auth-form-label" htmlFor="name" >Name <input className="auth-form-input" type='text' name='name' id='name' value={user.name} onChange={changeHandler} /></label>
                
                <label className="auth-form-label" htmlFor="email" >Email <input className="auth-form-input" type="email" name="email" id='email' value={user.email} onChange={changeHandler} /> </label>
                

                <label className="auth-form-label" htmlFor="password" > Password <input className="auth-form-input" type='password' name="password" id='password' value={user.password} onChange={changeHandler} /> </label>
                
                <button type='submit' onClick={clickHandler}>Sign Up</button>
                <p id="warn-message"> {signedUpMes}</p>
                <p >Already have an account? <Link className='auth-link' to='/login'> LogIn</Link> </p>
            </form>
        </div>
        </div>

    );
}

export default SignUp;