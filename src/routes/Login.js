import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

import './style/login.css';


function Login() {

    const navigate = useNavigate();

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error during sign in:', error);
      });
  };


  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className='login-header'>Data Integrated Smart Helmet</h1> <br />
        <h3 className='login-header'>Log in to get started</h3>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
