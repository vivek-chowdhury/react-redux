import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

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
            <Link
              to=""
              className={
                doChangeBackground
                  ? "btn btn-outline-light"
                  : "btn btn-outline-primary"
              }
            >
              Sign In
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
