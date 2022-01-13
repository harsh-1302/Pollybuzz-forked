import React from 'react';
import LoginSignUpForm from
  './containers/LoginSignUpForm/LoginSignUpForm';
import { Route, Switch } from 'react-router-dom';
import Feed from './containers/Feed/Feed'
import Navbar from './components/Navbar/Navbar';
import Pollybuzz from './components/Pollybuzz.png';
import './App.css';
import Search_bar from './components/Header/Search_bar.jsx';
import Button from './components/Header/Button.jsx';


export default function App() {
  return (
    <>
      <div className=" flex row " >
      
        <img src={Pollybuzz} id="Pollybuzz_image"  />

      </div>
      <Search_bar/>
     
    </>

  );
}


