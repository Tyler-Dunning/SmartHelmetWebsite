import { useLocation, useNavigate } from 'react-router-dom';
import { firestore } from './firebase';
import React, { useState } from 'react';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import './style/session.css';

function HelmetView() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { helmetNo, sessionNo } = state;

  const [expandedId, setExpandedId] = useState(null); // track expanded item

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
      <button
        className="session-back-button"
        onClick={() => navigate('/helmet', { state: { helmetNo } })}
      >
        Back to Helmet {helmetNo}
      </button>
      <h2 className="session-title">{sessionNo} Data</h2>
      <ul className="session-data-list">
        {value.docs.map((doc) => {
          const data = doc.data();
          const { accMag, gyroMag, severity, content, type } = data['res'];

          const isExpanded = expandedId === doc.id;

          return (
            <li
              key={doc.id}
              className={`session-data-item ${
                severity === 'high'
                  ? 'severity-high'
                  : severity === 'medium'
                  ? 'severity-medium'
                  : 'severity-low'
              } ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setExpandedId(isExpanded ? null : doc.id)}
            >
              <div><h2>{severity} Severity</h2></div>
              {type && <div><strong>Strike Type:</strong> {type}</div>}
              {type && <br />}
              <div><strong>Acceleration Magnitude:</strong> {Math.round(accMag)}</div>
              <div><strong>Gyroscope Magnitude:</strong> {Math.round(gyroMag)}</div>
              {!isExpanded && <p>Click to see more</p>}
              {isExpanded && (
                <div className="raw-data"><strong>Raw Content:</strong> <pre>{JSON.stringify(content, null, 2)}</pre></div>
              )}
              {isExpanded && (
                <p>Click to see less</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HelmetView;
