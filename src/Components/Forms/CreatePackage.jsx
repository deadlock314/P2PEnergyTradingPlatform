import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RootUrl from '../../Assets/RootURL';
import { getDataFromAPI, postDataToAPI } from '../../HelperFun/APImethods';
import { useDispatch } from 'react-redux';
import {changeUserAuth,setUserData} from '../../ReduxCode/Reducers';

function CreatePackage() {
    
    const redirect = useNavigate();
    const [user, setUser] = useState({  });
    const [signedUpMes, setsignedUpMes] = useState('');
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
    };
    const dispatch=useDispatch();



    const signupResHandler = (res) => {
       
        if (res.signedUp){
            setsignedUpMes('User succesfully signed up');
            alert("User succesfully signed up");
            getDataFromAPI(`${RootUrl}/user/${user.email}`).then((userdata) => {
                console.log(userdata);
                if (userdata.data) {
                    dispatch(changeUserAuth(true))
                    dispatch(setUserData(userdata.data)) 
                    redirect(`/private/user/${userdata.data.userAccData._Id}`);
                }
                else{
                    setsignedUpMes('Something went wrong try again');
                    
                }
            })
        }
        else
            setsignedUpMes('something went wrong try again');

        // if (res.isDuplicateUser)
        //     setsignedUpMes('User already exist in database');
        // else if (res.isEmailSent)
        //     redirect('/signup/alphakey', { state: { ...user } })
        // else if (!res.isEmailSent)
        //     setsignedUpMes('please enter correct email id')
        // else
        //     setsignedUpMes('something went wrong try again');
    }


    const clickHandler = async (e) => {
        e.preventDefault();
        postDataToAPI(`${RootUrl}/signup`, user)
        .then((res) => signupResHandler(res)).catch ((err)=> {
           console.log(err);
           setsignedUpMes('something went wrong try again');
       });
    }

    return (

        <div className="img-form-main">
        <div className='auth-wrapper'>
            <form className="form">
            <p className='form-heading' >Package</p>
                <label htmlFor="name" >Name <input type='text' name='name' id='name' value={user.name} onChange={changeHandler} /></label>
                
                <label htmlFor="email" >Email <input type="email" name="email" id='email' value={user.email} onChange={changeHandler} /> </label>
                

                <label htmlFor="password" > Password <input type='password' name="password" id='password' value={user.password} onChange={changeHandler} /> </label>
                
                <button type='submit' onClick={clickHandler}>Create Package</button>
                <p id="warn-message"> {signedUpMes}</p>
               
            </form>
        </div>
        </div>

    );
}



export default CreatePackage;