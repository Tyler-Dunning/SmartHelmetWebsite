import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { firestore } from '../firebase';

function TestDocHook() {
  const documentRef = doc(firestore, 'testCollection', 'TestID');

  const [value, loading, error] = useDocumentData(documentRef);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{value.num}</h1>
      <h3>Updated by {value.updatedBy}</h3>
    </div>
  );
}

export default TestDocHook;
