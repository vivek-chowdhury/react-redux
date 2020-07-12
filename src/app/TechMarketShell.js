import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import "./TechMarketShell.css";

import Feeds from "./Feeds/Feeds";
import Profile from "./Profile/Profile";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Login from "./Login/Login";
import { connect } from "react-redux";
// import { validateUser } from "./Login/loginActions";

function TechMarketShell(props) {
  function enforceAuthentication(component, path, user) {
    if (!user.userId && !user.password) {
      return <Redirect exact from={path} to="/" />;
    }
    return <Route exact path={path} component={component} />;
  }
  console.log(process.env.BASE_URL, "BASE_URL===>");
  return (
    <div className="rootContainer">
      <Header />
      <div className="container-fluid contentContainer">
        <Switch>
          <Route path="/" exact component={Login} />
          {/* <Route path="/feeds" component={Feeds} /> */}
          {enforceAuthentication(Feeds, "/feeds", props.user)}
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(TechMarketShell);
