import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { GoDash } from "react-icons/go";

function Header() {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg container-fluid headerContainer sticky-top">
      <div className="container  justify-content-center align-items-center">
        <NavLink className="navbar-brand logo" to="/">
        <p>Vya<span>par</span> Launch<span>pad</span></p>
        </NavLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>

          
          
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <span className="navbarBrandDiv">
            <NavLink className="navbar-brand " to="/">
            <p>Vya<span>par</span> Launch<span>pad</span></p>
        </NavLink>
        </span>
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <NavLink
                className={`nav-link ${active === "/" ? "active" : ""}`}
                to="/"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${active === "/about" ? "active" : ""}`}
                to="/about"
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${active === "/service" ? "active" : ""}`}
                to="/service"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${active === "/blog" ? "active" : ""}`}
                to="/FAQ"
              >
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${active === "/contact" ? "active" : ""}`}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${active === "/sign-up" ? "active" : ""}`}
                to="/sign-up"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Header);
