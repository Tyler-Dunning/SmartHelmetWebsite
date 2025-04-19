import React, { useState } from 'react'

import { auth } from './firebase'

import RegisterHelmet from './components/RegisterHelmet';
import GetUserHelmets from './components/GetUserHelmets';

import {  useNavigate } from 'react-router-dom';

import './style/home.css';

function Home() {

  const navigate = useNavigate();

  const [username, setUsername] = useState(null);

  auth.onAuthStateChanged(function(user) {
    if (user !== null) {
      
      setUsername(user.displayName);

    } else {
      setUsername("Unknown");
    }
  });



  return (
    <div className='home-wrapper'>
      <div className='home-container'>
        <p className='welcome-text'>
          Welcome {username}{" "}
          <button className='log-out' onClick={() => navigate('/')}>Log Out</button>
        </p>
        <RegisterHelmet />
        <GetUserHelmets />
      </div>
    </div>
  );
  
}

export default Home