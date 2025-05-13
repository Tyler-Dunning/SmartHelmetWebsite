import { useLocation, useNavigate } from 'react-router-dom';

import { firestore } from './firebase';

import React from 'react';

import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import './style/helmet.css'

function HelmetView() {
    const navigate = useNavigate();

    const {state} = useLocation();
    const {helmetNo} = state;

    const [data, loading, error] = useCollection(collection(firestore, 'helmets', helmetNo, 'Session List'), 
    {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
        
    if (loading) return <p className='helmet-loading'>Loading...</p>;
    if (error) return <p className='helmet-error'>Error: {error.message}</p>;

    console.log(data);

    return (
        <div className='helmet-view-wrapper'>
          <button className='helmet-to-home' onClick={() => navigate('/home')}>Back to Home</button>
      
          <div className='helmet-header'>
            <h2>Helmet {helmetNo}</h2>
          </div>
          
          <div className='session-button-group'>
          {[...data.docs]
            .sort((a, b) => {
                const aNum = parseInt(a.data().sessNo.replace(/[^\d]/g, '')) || 0;
                const bNum = parseInt(b.data().sessNo.replace(/[^\d]/g, '')) || 0;
                return aNum - bNum;
            })
            .map((doc) => (
                <button
                className='session-button'
                key={doc.data().sessNo}
                onClick={() =>
                    navigate('/session', {
                    state: { helmetNo, sessionNo: doc.data().sessNo },
                    })
                }>
                <b className="session-title">{doc.data().sessNo}</b> <br />
                <b>Hits Recorded: </b>{doc.data().totalHits} <br />
                <b>Started: </b>{doc.data().date.toDate().toDateString()}
                </button>
            ))}

          </div>
        </div>
      );
      
}

export default HelmetView;