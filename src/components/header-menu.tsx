import * as React from "react";
import "../assets/css/header.css";

import { Link } from "gatsby";

export default function HeaderMenu() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul>
          <li>
            <div className="shape-box">
              <img id="square" src="/shapes/filled/square-xs.png" alt="" />
            </div>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <div className="shape-box">
              <img
                id="pizza-slice"
                src="/shapes/filled/pizza-slice-xs.png"
                alt=""
              />
            </div>
            <Link to="/my-work">Projets</Link>
          </li>
          <li>
            <div className="shape-box">
              <img id="diamond" src="/shapes/filled/diamond-xs.png" alt="" />
            </div>
            <Link to="/test-my-api">Tester mon API</Link>
          </li>
          <li>
            <div className="shape-box">
              <img id="circle" src="/shapes/filled/circle-xs.png" alt="" />
            </div>
            <Link to="/about-me">Moi</Link>
          </li>
          <li>
            <div className="shape-box">
              <img id="triangle" src="/shapes/filled/triangle-xs.png" alt="" />
            </div>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
