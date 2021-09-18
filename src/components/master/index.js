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
} from "react-router-dom";

export default function MasterView() {

  return (
      <Router>
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
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
  )
}