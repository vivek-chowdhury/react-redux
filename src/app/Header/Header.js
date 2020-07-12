import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  const [isListening, setIsListening] = useState(false);
  const [doChangeBackground, setDoChangeBackground] = useState(false);

  useEffect(() => {
    if (!isListening) {
      setIsListening(true);
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (isListening) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isListening]);

  const handleScroll = (event) => {
    event.preventDefault();
    setDoChangeBackground(window.scrollY > 40);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        doChangeBackground ? "white-background" : ""
      }`}
    >
      <div className="container">
        <div className="collapse navbar-collapse full-width">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className={
                  doChangeBackground ? "nav_link_light" : "nav_link_dark"
                }
                to="/feeds"
              >
                Feeds
              </NavLink>
            </li>
            {props.user.id && (
              <li className="nav-item">
                <NavLink
                  className={
                    doChangeBackground ? "nav_link_light" : "nav_link_dark"
                  }
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav right-options">
            <li className="nav-item">
              <NavLink
                className={
                  doChangeBackground ? "nav_link_light" : "nav_link_dark"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={
                  doChangeBackground ? "nav_link_light" : "nav_link_dark"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <button
              className={
                doChangeBackground
                  ? "btn btn-outline-light"
                  : "btn btn-outline-primary"
              }
              onClick={props.onSignIn}
            >
              {" "}
              {!props.user.isLoggedIn ? "Sign In" : "Sign Out"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function mapToStateProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapToStateProps)(Header);
