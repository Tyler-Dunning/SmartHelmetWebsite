
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

import React from 'react'

function TestFunctionCall() {

    const testButton = async () => {

        const functionCall = httpsCallable(functions, 'testFunction');
        
        await functionCall();
      }
  return (
    <button onClick={testButton}>Click to increment value</button>
  )
}

export default TestFunctionCall