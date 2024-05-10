import * as React from "react";
/* import { Icon } from "@iconify/react"; */

import "../assets/css/fun-facts.css";

export default function FunFacts() {
  const funFactsArr = [
    {
      text: "jaime les carottes",
      link: "",
      linkName: "",
    },
    {
      text: "je n'aime pas les chamallows",
      link: "",
      linkName: "",
    },
    {
      text: "mon spotify",
      link: "http://localhost:8000/api",
      linkName: "Spotify",
    },
  ];
  return (
    <div className="television-container">
      <ul className="flex-column center-center prompt-tv">
        <h6>Fun Facts</h6>
        {funFactsArr.map((fact, idx) => {
          if (fact.link) {
            return (
              <a key={idx} href={fact.link} target="_blank" className="button">
                {fact.linkName}
              </a>
            );
          }
          return (
            <li key={idx} className="flex-row center-center">
              <span className="body2 text-center">{fact.text}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex-row center-center mt-05">
        {/* <Icon icon="mdi:eject-circle" className="small-icon icon" />
        <Icon icon="el:play-alt" className="large-icon icon" />
        <Icon icon="zondicons:pause-solid" className="large-icon icon" />
        <Icon icon="el:stop-alt" className="small-icon icon" /> */}
      </div>
    </div>
  );
}
