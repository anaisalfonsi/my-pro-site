import * as React from "react";
import "../assets/css/layout.css";
import "../assets/css/cover.css";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dev__body">
      {/* <Header /> */}
      <main>{children}</main>
      <div className="wrapper">
        <div>
          <div className="cover-illustration panels">
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
            {/* <div className="flex-row justify-end">
          <button id="jump-top-button">➔</button>
        </div> */}
          </div>
          <div className="cover-illustration stairs">
            <div className="entry-border">
              <div className="entry-frame">
                <div className="entry-layer"></div>
                <div className="entry-layer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  <Footer /> */}
    </div>
  );
}
