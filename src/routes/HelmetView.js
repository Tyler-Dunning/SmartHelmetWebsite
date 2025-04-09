import { useLocation, useNavigate } from 'react-router-dom';

import {firestore} from './firebase';

import React from 'react';

import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
// import {useState, useEffect} from 'react';

// import { functions } from './firebase';
// import { httpsCallable } from 'firebase/functions';


function HelmetView() {
    const navigate = useNavigate();

    const {state} = useLocation();
    const {helmetNo} = state;

    const [data, loading, error] = useCollection(collection(firestore, 'helmets', helmetNo, 'Session List'), 
    {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
        
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data);

    // const [sessions, setSessions] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const getSessions = httpsCallable(functions, 'getHelmetSessions');
    //         const result = await getSessions({helmetNum: helmetNo})
    //         console.log(result.data);
    //         const arr = result.data.sessions;
    //         setSessions(arr.map(e => <li><button onClick={() => {navigate('/session', {state: {helmetNo, sessionNo: e}})}}>{e}</button></li>));
    //     }
    //     fetchData();

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);




    return (
        // <div>
        //     <h2>Helmet: {helmetNo}</h2> <br />
        //     {sessions}
        
        // </div>
        <div>
            <h2>Helmet: {helmetNo}</h2>
            {data.docs.map((doc) => (
              <button key={doc.data().sessNo} onClick={() => {navigate('/session', {state: {helmetNo, sessionNo: doc.data().sessNo}})}}>{doc.data().sessNo}</button>
            ))}
        </div>
        
    )
}

export default HelmetView;