import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import './App.scss';
import "fontsource-roboto";

import RouterConfig from 'navigation/RouterConfig';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <RouterConfig/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;