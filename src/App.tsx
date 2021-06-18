import React from 'react';
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Button from 'react-bootstrap/Button';

import Homepage from './pages/Homepage/Homepage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        {/* Anything more specific needs to be prioritized higher */}
        {/* <Route path='/' component={Homepage} /> */}
      </Switch>
    </div>
  );
}

export default App;