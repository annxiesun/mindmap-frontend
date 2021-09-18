import React from 'react';

export default function UploadFile({ toResults }) {
  return (
    <div>
       <input type="file" />
       <button onClick={toResults}></button>
    </div>
  )
}