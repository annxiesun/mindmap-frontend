import React from 'react';
import styles from './style.module.css';
import {
  Link
} from "react-router-dom";
import Fade from 'react-reveal';

export default function ChoosePath() {
  return (
    <div className={styles.container}>
      <h2>How do you want to upload your notes?</h2>
      <div className={styles.cardContainer}>
        <Link to='/upload'>
          <Fade bottom distance="100px" duration={200}>
            <div className={styles.choiceCard}>
              <img className={styles.graphic} src='/resources/file.svg' />
              <h3>Upload File</h3>
            </div>
          </Fade>
        </Link>
        <Link to='/choose'>
          <Fade bottom distance="200px" duration={220}>
            <div className={styles.choiceCard}>
              <img className={styles.graphic} src='/resources/paste.svg' />
              <h3>Paste Text</h3>
            </div>
          </Fade>
        </Link>
      </div>
    </div>
  )
}