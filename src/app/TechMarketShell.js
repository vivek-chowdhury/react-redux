import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./TechMarketShell.css";

import Feeds from "./Feeds/Feeds";
import Profile from "./User/Profile/Profile";
import Login from "./User/Login/Login";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import { signOutUser } from "./User/state/userActions";

function TechMarketShell(props) {
  function enforceAuthentication(component, path, user) {
    console.log(user, !user.isLoggedIn);
    if (!user.isLoggedIn) {
      return <Redirect exact from={path} to="/" />;
    }
    return <Route exact path={path} component={component} />;
  }

  const hangleSignIn = (event) => {
    event.preventDefault();
    if (props.user.isLoggedIn) {
      props.signOutUser();
    }
    props.history.push("/");
  };

  return (
    <div className="rootContainer">
      <Header onSignIn={hangleSignIn} />
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

const mapDispatchToProps = {
  signOutUser,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TechMarketShell));
