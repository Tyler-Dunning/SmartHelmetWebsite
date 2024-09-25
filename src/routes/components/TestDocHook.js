import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Import your Firestore db

function TestDocHook() {
  // Specify the document you want to get data from
  const documentRef = doc(firestore, 'testCollection', 'TestID');

  // Fetch document data
  const [value, loading, error] = useDocumentData(documentRef);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Document data will be stored in `value`
  return (
    <div>
      <h1>{value.num}</h1>
      <h3>Updated by {value.updatedBy}</h3>
    </div>
  );
}

export default TestDocHook;
