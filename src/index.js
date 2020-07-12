import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import TechMarketShell from "./app/TechMarketShell";
import { Provider } from "react-redux";
import configurationStore from "./app/configureStore";

const store = configurationStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <TechMarketShell />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
