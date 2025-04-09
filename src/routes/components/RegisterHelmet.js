import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

import React, { useState } from 'react'


function RegisterHelmet() {

    const [result, setResult] = useState("");
    const registerFun = async (num) => {
        const functionCall = httpsCallable(functions, 'registerHelmet');
    
        setResult((await functionCall({helmetNum: num})).data);
    };
    const deregisterFun = async (num) => {
        const functionCall = httpsCallable(functions, 'deregisterHelmet');
    
        setResult((await functionCall({helmetNum: num})).data);
    };

    const [helmetNum, setHelmetNum] = useState("");

    return (
        <div>
            <input value={helmetNum} onChange={(e) => setHelmetNum(e.target.value)} placeholder='Helmet Serial Number' />
            <button onClick={() => registerFun(helmetNum)}>Register</button>
            <button onClick={() => deregisterFun(helmetNum)}>Deregister</button>
            <br />
            {result}
        </div>
    );
     
};

export default RegisterHelmet;