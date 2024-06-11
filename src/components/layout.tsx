import * as React from "react";
import "../assets/css/layout.css";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dev__body">
      {/* <Header /> */}
      <main>{children}</main>
      {/*  <Footer /> */}
    </div>
  );
}
