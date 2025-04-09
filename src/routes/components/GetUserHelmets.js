import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

import React, { useState, useEffect } from 'react'

import {  useNavigate } from 'react-router-dom';



function ViewUserHelmets() {
  const [result, setResult] = useState([]);

  const navigate = useNavigate();
  
  useEffect( () => {
    async function fetchData() {
      const functionCall = httpsCallable(functions, 'getUserHelmets');
      const r = await functionCall();
      console.log(r.data);
      const arr = r.data.data;
      setResult(arr.map(obj => <li key={obj.sno}><button onClick={() => navigate('/helmet', {state: {helmetNo: obj.sno}})}>{obj.sno}</button></li>));
    }
    fetchData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {result}
    </div>
  );
};

export default ViewUserHelmets;
