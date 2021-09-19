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
        <div style={{ padding: '42px', boxSize: 'border-box' }}>
          <Fade bottom>
            <h1 style={{ marginBottom: '0px' }}>Turn your notes into a mind map</h1>
            <p style={{ marginTop: '4px' }}>Organize and visualize your thoughts with one simple click!</p>
          </Fade>
          <Fade bottom delay={500}>
            <Link to='/choose'>
              <button className={`featureButton`}>Start</button>
            </Link>
          </Fade>
        </div>
        <img className={styles.image} src='/resources/landing_graphic.png' />
      </div>
    </div >
  )
}