import * as React from "react";
import "../assets/css/footer.css";
import FunFacts from "./fun-facts";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="flex-column between">
          <div className="logo">
            <h3>AW</h3>
          </div>
          <p>
            Créé avec <br /> ⋆｡‧₊° ♱{" "}
            <img
              src="/shapes/gradient/heart.png"
              className="heart-icon"
              alt=""
            />{" "}
            ♱ ‧₊˚｡⋆
            <br /> par Anaïs Alfonsi © 2024
          </p>
        </div>
        <FunFacts />
        <div className="logo mobile">
          <h3>AW</h3>
        </div>
      </div>
      <div className="border-decoration"></div>
    </footer>
  );
}
