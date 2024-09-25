import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


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
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;
