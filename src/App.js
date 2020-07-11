import React from "react";
import "./App.css";

import TechMarketShell from "./app/TechMarketShell";
import { Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <TechMarketShell />
    </Switch>
  );
}

export default App;
