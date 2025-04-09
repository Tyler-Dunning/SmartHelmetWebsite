import React, { useState } from 'react'

import { auth } from './firebase'

import TestDocHook from './components/TestDocHook'
import TestFunctionCall from './components/TestFunctionCall';
import RegisterHelmet from './components/RegisterHelmet';
import GetUserHelmets from './components/GetUserHelmets';

function Home() {
  const [username, setUsername] = useState(null);
  const [uid, setUid] = useState(null);

  auth.onAuthStateChanged(function(user) {
    if (user !== null) {
      
      setUsername(user.displayName);
      setUid(user.uid);

    } else {
      setUsername("Unknown");
    }
  });



  return (
    <div>
      <p>Welcome {username} uid: {uid}</p>
      <TestFunctionCall />
      <TestDocHook />
      <RegisterHelmet />
      <GetUserHelmets />

    </div>
  )
}

export default Home