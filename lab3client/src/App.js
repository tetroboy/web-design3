import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from "./pages/header/header";
import Footer from "./pages/footer/footer";
import AboutApp from "./pages/aboutApp/aboutApp";
import Account from "./pages/Account/account";
import Application from "./pages/app/app";
import Login from "./pages/registration/logIn/login";
import SignUp from "./pages/registration/signUp/signup";

function App() {
    const user = localStorage.getItem('token')
    return (
      <Router>
        <Header/>
        <Routes>
            {user && <Route path='/' element = { <Account /> }/>}
          <Route path = '/' element = { <Application /> }/>
          <Route path = '/aboutApp' element = { <AboutApp /> }/>
          <Route path = '/account' element = { <Account /> }/>
          <Route path = '/login' element = { <Login /> }/>
          <Route path = '/signup' element = { <SignUp /> }/>
        </Routes>
        <Footer/>
      </Router>
  )

}

export default App;
