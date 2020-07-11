import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Switch, Route } from "react-router-dom";
import "./TechMarketShell.css";

import Feeds from "./Feeds/Feeds";
import Profile from "./Profile/Profile";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Login from "./Login/Login";

function TechMarketShell(props) {
  return (
    <div className="rootContainer">
      <Header />
      <div className="container-fluid contentContainer">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/feeds" exact component={Feeds} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default TechMarketShell;
