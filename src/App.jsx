import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import HomePage from './Components/HomeComponents/HomePage';
import Footer from './Components/NavComponents/Footer';
import NavBar from './Components/NavComponents/NavBar';
import LogIn from './Components/AuthComponent/LogIn';
import SignUp from './Components/AuthComponent/SignUp';
import AuthOtp from './Components/AuthComponent/AuthOtp';
import "./App.css";
import UserList from './Components/UserListComponents/UserList';


const App = () => {

  return (

    <>
    <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/" element={<HomePage/>} />

      <Route path="/userlist/:usertype" element={<UserList/>} />

      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signup/otp" element={<AuthOtp/>} />
      <Route path="/login" element={<LogIn/>} />

     </Routes>
      <Footer/>
    </BrowserRouter>
     
    </>

  )

};




export default App;