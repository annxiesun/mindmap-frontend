import React from 'react';

export default function Landing({ toChoosePath }) {
  return (
    <div>
      Turn your notes into mindmaps
      <button onClick={toChoosePath}>Start</button>
    </div>
  )
}