import { useLocation, useNavigate } from 'react-router-dom';
import { firestore } from './firebase';
import React from 'react';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import './style/session.css';

function HelmetView() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { helmetNo, sessionNo } = state;

  const [value, loading, error] = useCollection(
    collection(firestore, 'helmets', helmetNo, sessionNo),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) return <p className="session-loading">Loading...</p>;
  if (error) return <p className="session-error">Error: {error.message}</p>;

  return (
    <div className="session-detail-wrapper">
      <button className="session-back-button" onClick={() => navigate('/helmet', { state: { helmetNo } })}>Back to Helmet {helmetNo}</button>
      <h2 className="session-title">{sessionNo} Data</h2>
      <ul className="session-data-list">
        {value.docs.map((doc) => (
          <li className="session-data-item" key={doc.id}>
            <pre>{JSON.stringify(doc.data(), null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HelmetView;
