import React, { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Results from "../pages/Results";
import Spinner from '../Spinner';

export default function GenerateButton({ imageFile }) {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const apiUrl = "http://c86e-34-86-196-136.ngrok.io/find";
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    setClicked(true);
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await axios.post(apiUrl, formData);
      //.then((data) => setData(data.result));
      // const datas = await response.data;
      // need markdown file here
      // setData(datas.result);

      console.log("this is res");
      console.log(response);

      // return response
      setLoad(true);
      return response.data;
    }
  };

  return (
    // <Link
    //   to={{ pathname: "/results", state: { result: data } }}
    //   params={{ result: data }}
    // >
    <>
      <button
        onClick={async () => {
          const d = await handleClick();
          console.log(d);

          setData(d.result);
          setClicked(false);
          console.log(data);
        }}
        className={true ? styles.button : "featureButton"}
      >
        <span style={{ zIndex: 9 }}>Generate Mind Map</span>
        <div className={styles.hoverEffect} />
      </button>
      {clicked && <Spinner />}
      {load ? <Results mark={data} /> : null}
    </>
  );
}
