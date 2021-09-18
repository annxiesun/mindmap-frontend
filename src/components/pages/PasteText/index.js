import React from 'react';
import styles from './style.module.css';

export default function PasteText() {
  return (
    <div className={styles.container}>
      <h1 className={styles.label}>Paste your notes</h1>
      <textarea className={styles.textArea}/>
    </div>
  )
}