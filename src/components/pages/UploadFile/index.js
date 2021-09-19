import React, { useRef, useState } from 'react';
import styles from './style.module.css';
import { FileDrop } from 'react-file-drop';
import Upload from '../../icon/Upload';
import GenerateButton from '../../generate';
import { Fade } from 'react-reveal';

export default function UploadFile({ toResults }) {
  const [selectFile, setSelectFile] = useState(null);

  const fileInputRef = useRef(null);

  const onFileInputChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setSelectFile(file);
    if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {

    } else if (file.type === 'text/plain') {
      const text = await file.text();
      console.log(text);

    } else if (file.type === 'application/pdf') {

    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {

    }
  }

  const onTargetClick = () => {
    fileInputRef.current.click()
  }

  return (
    <Fade bottom distance="50px">
      <div className={styles.container}>
        <input
          onChange={onFileInputChange}
          ref={fileInputRef}
          type="file"
          className={styles.hidden}
        />
        <div className={styles.text}>
          <button onClick={onTargetClick} className={styles.uploadBtn}>
            Upload File
          </button>
          <p>{selectFile !== null ? <>{selectFile.name}<span className={styles.x} onClick={() => setSelectFile(null)}>✕</span></> : 'Choose file'}</p>
        </div>
        <FileDrop
          onDrop={(files, event) => setSelectFile(files[0])}
          onTargetClick={onTargetClick}
          targetClassName={styles.target}
          className={styles.filedrop}
          draggingOverFrameClassName={styles.filedropDrag}
        >
          <>
            <Upload className={styles.icon} />
            Click or Drag and drop file
          </>
        </FileDrop>
        <GenerateButton />
      </div>
    </Fade>
  )
}