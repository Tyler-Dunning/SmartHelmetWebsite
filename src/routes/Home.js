import React from 'react'

import { auth } from './firebase'

import TestDocHook from './components/TestDocHook'
import TestFunctionCall from './components/TestFunctionCall';



function Home() {

    const username = auth.currentUser.displayName;

  return (
    <div>
        <p>Welcome {username}</p>
        <TestFunctionCall />
        <TestDocHook />
    </div>
  )
}

export default Home