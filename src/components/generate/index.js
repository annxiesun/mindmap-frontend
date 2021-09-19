import React from "react";
import styles from "./style.module.css";
import axios from "axios";

export default function GenerateButton({ imageFile }) {
  const apiUrl = "https://mindmap-api.9aditya9.repl.co/find";
  const handleClick = () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      const data = axios.post(apiUrl, formData);
      console.log(data);
      // need markdown file here
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className={true ? styles.button : "featureButton"}
    >
      <span style={{ zIndex: 9 }}>Generate Mind Map</span>
      <div className={styles.hoverEffect} />
    </button>
  );
}
