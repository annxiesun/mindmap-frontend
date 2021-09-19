import React, { useState } from 'react';
import Landing from '../pages/Landing';
import ChoosePath from '../pages/ChoosePath';
import PasteText from '../pages/PasteText';
import Results from '../pages/Results';
import UploadFile from '../pages/UploadFile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './style.module.css';

export default function MasterView() {
  return (
    <>
      <Router>
        <Link to="/">
          <div className={styles.logoContainer}>
            <img className={styles.logoIcon} src="/resources/logo.svg" />
            MapIT
          </div>
        </Link>
        <Switch>
          <Route path="/upload">
            <UploadFile />
          </Route>
          <Route path="/paste">
            <PasteText />
          </Route>
          <Route path="/choose">
            <ChoosePath />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  )
}