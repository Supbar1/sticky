import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
// import "./nav.css";

export function Navbar() {
  const [navbarLinks, setNavbarLins] = useState("navbar-links");

  function navbarToggle() {
    navbarLinks === "navbar-links"
      ? setNavbarLins("navbar-links active")
      : setNavbarLins("navbar-links");
  }
  return (
    <div className="nav">
      <img
        src="https://dictionary.cambridge.org/pl/images/thumb/stick_noun_002_35886.jpg?version=5.0.247"
        alt="sorry for stick"
      />

      <div className="toggle-button " onClick={navbarToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={navbarLinks}>
        <div>
          <Link to="/">Main</Link>
        </div>
        <div>
          <Link to="/comments">Comments</Link>
        </div>
        <div>
          <Link to="/profiles">Profiles</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
