import { useLocation } from 'react-router-dom';

import {firestore} from './firebase';

import React from 'react';

import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';


function HelmetView() {

    const {state} = useLocation();
    const {helmetNo, sessionNo} = state;
        
    const [value, loading, error] = useCollection(
    collection(firestore, 'helmets', helmetNo, sessionNo),
    {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    if(loading) return <p>Loading...</p>;

    if(error) return <p>Error: {error.message}</p>

  return (
    <div>
      <ul>
      {value.docs.map((doc) => (
              <li key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default HelmetView;