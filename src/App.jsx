import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import HomePage from './Components/HomeComponents/HomePage';
import Footer from './Components/NavComponents/Footer';
import NavBar from './Components/NavComponents/NavBar';
import LogIn from './Components/AuthComponent/LogIn';
import SignUp from './Components/AuthComponent/SignUp';
import AuthOtp from './Components/AuthComponent/AuthOtp';
import "./App.css";
import PackageList from './Components/PackageListComponents/PackageList';
import PrivateProfile from './Components/ProfileComponents/PrivateProfile';
import PublicProfile from './Components/ProfileComponents/PublicProfile';
import CreatePackage from './Components/Forms/CreatePackage';
import MainNotifications from './Components/Notifications/MainNotifications';
import AdditionalInfo from './Components/Forms/AdditionalInfo';


const App = () => {

  return (

    <>
    <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/" element={<HomePage/>} />

      <Route path="/packagelist/:usertype" element={<PackageList/>} />

      <Route path="/signup" element={<SignUp/>} />
      <Route path="/authotp" element={<AuthOtp/>} />
      <Route path="/login" element={<LogIn/>} />

      <Route path='/private/user/:userId' element={<PrivateProfile/>} />
      <Route path='/publicview/user/:userId' element={<PublicProfile/>} />

      <Route path="/createpackage" element={<CreatePackage/>} />
      <Route path="/additionalinfo" element={<AdditionalInfo/>} />
      

      <Route path="/notifications" element={<MainNotifications/>} />


     </Routes>
      <Footer/>
    </BrowserRouter>
     
    </>

  )

};




export default App;