import * as React from "react";
import { useState } from "react";
import "../assets/css/header.css";
import { useLocation } from "@reach/router";
import HeaderMenu from "./header-menu";

export default function Header() {
  const location = useLocation();
  const [isToggleOpen, setToggleOpen] = useState(false);

  const toggleNav = (e: MouseEvent) => {
    e.preventDefault();
    setToggleOpen(!isToggleOpen);
  };

  return (
    <header>
      <div className="flex-row between wh-100">
        <div className="flex-row center-center">
          <div className="logo">
            <h3>AW</h3>
          </div>
          <div className="brand-name">
            <h3>Anaïs Web</h3>
          </div>
        </div>
        <div
          className="burger-zone"
          onClick={(e) => {
            toggleNav;
          }}
        >
          {isToggleOpen ? (
            <>
              <div className="flex-row center-center xmark">
                <span></span>
                <span></span>
              </div>
            </>
          ) : (
            <div className="flex-column center-center shapes">
              <div className="flex-row">
                <div className="triangle"></div>
                <div className="circle"></div>
              </div>
              <div className="flex-row">
                <div className="square"></div>
                <div className="pizza-slice"></div>
              </div>
            </div>
          )}
        </div>
        <div className={isToggleOpen ? "menu-burger show-menu" : "menu-burger"}>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
}
