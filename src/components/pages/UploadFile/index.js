import React from 'react';
import styles from './style.module.css';
import { FileDrop } from 'react-file-drop';

export default function UploadFile({ toResults }) {
  return (
    <div>
       <input type="file" />
       <div className={styles.filedrop}>
       <FileDrop
          onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          onFrameDrop={(event) => console.log('onFrameDrop', event)}
          onDragOver={(event) => console.log('onDragOver', event)}
          onDragLeave={(event) => console.log('onDragLeave', event)}
          onDrop={(files, event) => console.log('onDrop!', files, event)}
        >
          Drop some files here!
        </FileDrop>
        </div>
       <button></button>
    </div>
  )
}