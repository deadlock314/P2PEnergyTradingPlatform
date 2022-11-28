import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/NavComponents/Footer';
import NavBar from './Components/NavComponents/NavBar';
import "./globalStyles.css";



const App = () => {

  return (

    <>
    <BrowserRouter>
     <NavBar />

      <Footer/>
    </BrowserRouter>
     
    </>

  )

};




export default App;