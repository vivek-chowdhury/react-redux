import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  // Contains true if scroll event is added.
  const [isListening, setIsListening] = useState(false);

  // contains true if window is scrolled by user
  const [doChangeBackground, setDoChangeBackground] = useState(false);

  /**
   * @description This function is responsible for adding scroll event listener and
   * removing it when Header is removed from display list.
   */
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

  /**
   * @description This method is invoked when user scroll window, it is responsible
   * for setting member variable which will further change the background color of header
   * component.
   * @param {*} event
   */
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
            {props.user.isLoggedIn && (
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
            )}
            {props.user.isLoggedIn && (
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
              {!props.user.isLoggedIn ? "Sign In" : "Sign Out"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/**
 * @description This method retrieve slice of state from store
 * @param {*} state
 */
function mapToStateProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapToStateProps)(Header);
