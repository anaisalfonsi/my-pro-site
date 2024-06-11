import * as React from "react";
import "../assets/css/cover.css";

export default function Cover() {
  return (
    <section className="cover__section">
      <div>
        <div className="cover-illustration panels">
          <div id="palmtree-svg">
            <img src="/svg/palmtree.svg" alt="" />
          </div>
          <div className="screen-border">
            <div className="screen-frame">
              <div className="screen-layer">
                <div className="screen-img"></div>
                <div className="screen-img"></div>
                <div className="screen-img"></div>
              </div>
              <div className="screen-layer">
                <div className="screen-img"></div>
                <div className="screen-img"></div>
                <div className="screen-img"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="panel-border">
              <div className="panel-frame">
                <div className="panel-layer">
                  <div className="panel-img"></div>
                </div>
                <div className="panel-layer">
                  <div className="panel-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cover-illustration stairs">
          <div className="entry-border">
            <div className="entry-frame">
              <div className="entry-layer"></div>
              <div className="entry-layer"></div>
            </div>
          </div>
          <div id="stone-svg">
            <img src="/svg/stone.svg" alt="" />
          </div>
          <div id="me-working-svg">
            <img src="/svg/working_ping.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
