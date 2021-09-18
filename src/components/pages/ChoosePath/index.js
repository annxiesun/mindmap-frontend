import React from 'react';

export default function ChoosePath({ toUploadFile, toPasteText}) {
  return (
    <div>
      <button onClick={toUploadFile}>
        Upload File
      </button>
      <button onClick={toPasteText}>
        Paste Text
      </button>
    </div>
  )
}