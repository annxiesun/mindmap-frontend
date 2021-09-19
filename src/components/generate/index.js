import React from "react";
import styles from './style.module.css'

export default function GenerateButton() {
  return (
    <button className={true ? styles.button : 'featureButton'}>
      <span style={{ zIndex: 9 }}>Generate Mind Map</span>
      <div className={styles.hoverEffect}/>
    </button>
  )
}