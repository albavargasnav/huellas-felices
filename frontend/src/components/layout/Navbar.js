import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AuthButton from "../../components/auth/AuthButton/AuthButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="brand-name">
          <Link to="/huellas-felices">Huellas Felices</Link>
        </div>
        <div className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/344/667/non_2x/dog-paw-free-png.png"
            alt="Huella"
          />
        </div>
      </div>
      <div className="right-section">
        <ul className="nav-links">
          <AuthButton />
          <li>
            <a href="/huellas-felices/advertId">Adopción</a>
          </li>
          <li>
            <Link to="/huellas-felices/info-prote">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
