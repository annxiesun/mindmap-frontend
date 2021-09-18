import React from 'react';

export default function PasteText({ toResults }) {
  return (
    <div>
      Paste your notes
      <textarea />
      <button onClick={toResults}></button>
    </div>
  )
}