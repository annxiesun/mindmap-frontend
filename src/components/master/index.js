import React, { useState } from 'react';
import Landing from '../pages/Landing';
import ChoosePath from '../pages/ChoosePath';
import PasteText from '../pages/PasteText';
import Results from '../pages/Results';
import UploadFile from '../pages/UploadFile';

export default function MasterView() {
  const [page, setPage] = useState('landing');

  switch(page) {
    case 'landing':
      return <Landing toChoosePath={() => setPage('choosePath')}/>
    case 'choosePath':
      return <ChoosePath toUploadFile={() => setPage('uploadFile')} toPasteText={() => setPage('pasteText')}/>
    case 'uploadFile':
      return <UploadFile toResults={() => setPage('results')} />
    case 'pasteText':
      return <PasteText toResults={() => setPage('results')} />
    case 'results':
      return <Results />
  }
  return (
    <div>

    </div>
  )
}