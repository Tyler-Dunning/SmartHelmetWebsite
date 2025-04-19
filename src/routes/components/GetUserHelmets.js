import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/userHelmets.css';

function ViewUserHelmets() {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  const deregisterFun = async (num) => {
    const functionCall = httpsCallable(functions, 'deregisterHelmet');
    await functionCall({ helmetNum: num });
    window.location.reload();
  };

  useEffect(() => {
    async function fetchData() {
      const functionCall = httpsCallable(functions, 'getUserHelmets');
      const r = await functionCall();
      const arr = r.data.data;
      setResult(arr);
    }
    fetchData();
  }, []);

  return (
    <div className="helmet-list-container">
      <h2 className="helmet-list-header">My Helmets</h2>
      {result.length !== 0 ? (
        <ul className="helmet-list-ul">
          {result.map((obj) => (
            <li className="helmet-list-item" key={obj.sno}>
              <button className="helmet-view-button" onClick={() => navigate('/helmet', { state: { helmetNo: obj.sno } })}>Helmet {obj.sno}</button>
              <button className="helmet-delete-button" onClick={() => deregisterFun(obj.sno)}>✕</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-helmets-msg">
          No helmets are registered to this account. Click "Register a New Helmet" to get started!
        </p>
      )}
    </div>
  );
}

export default ViewUserHelmets;
