import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

import React, { useState } from 'react';
import '../style/registerHelmet.css';

function RegisterHelmet() {
  const [result, setResult] = useState('');
  const [helmetNum, setHelmetNum] = useState('');
  const [registerActive, setRegisterActive] = useState(false);

  const registerFun = async (num) => {
    const functionCall = httpsCallable(functions, 'registerHelmet');
    const res = await functionCall({ helmetNum: num });
    setResult(res.data);
  };

  if (result === 'Successfully claimed helmet') {
    window.location.reload();
  }

  return (
    <div className="register-helmet-container">
      {!registerActive ? (
        <button className="register-toggle-btn" onClick={() => setRegisterActive(true)}>Register a New Helmet</button>
      ) : (
        <>
          <button className="register-cancel-btn" onClick={() => setRegisterActive(false)}>
            Cancel
          </button>
          <div className="register-form">
            <input
              type="text"
              value={helmetNum}
              onChange={(e) => setHelmetNum(e.target.value)}
              placeholder="Helmet Serial Number"
              className="register-input"
            />
            <button className="register-submit-btn" onClick={() => registerFun(helmetNum)}>Register</button>
          </div>
        </>
      )}
      {result && <p className="register-result">{result}</p>}
    </div>
  );
}

export default RegisterHelmet;
