import React from 'react';
import styles from './style.module.css';
import {
  Link
} from "react-router-dom";
import { Fade } from 'react-reveal';

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Fade bottom>
          <h1>Turn your notes into mindmaps</h1>
        </Fade>
        <Fade bottom delay={500}>
          <Link to='/choose'>
            <button className={`featureButton`}>Start</button>
          </Link>
        </Fade>
      </div>
    </div >
  )
}