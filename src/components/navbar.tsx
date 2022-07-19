import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

export function NavBar() {
  const [navbarLinks, setNavbarLins] = useState("navbar-links");

  function navbarToggle() {
    navbarLinks === "navbar-links"
      ? setNavbarLins("navbar-links active")
      : setNavbarLins("navbar-links");
  }
  return (
    <div className="nav ">
      <img
        src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
        alt="Start-up Company"
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
