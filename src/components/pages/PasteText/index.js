import React, { useState } from 'react';
import styles from './style.module.css';
import GenerateButton from '../../generate';
import { Fade } from 'react-reveal';

export default function PasteText() {
  const [text, setText] = useState('');

  return (
    <Fade bottom distance="50px">
      <div className={styles.container}>
        <textarea placeholder="Paste notes here..." value={text} className={styles.textArea} onChange={(e) => setText(e.target.value)} />
        <GenerateButton />
      </div>
    </Fade>
  )
}