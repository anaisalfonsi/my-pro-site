import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";
import Cover from "./cover";
import Service from "./service";
import Work from "./work";
import About from "./about";
import Contact from "./contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        {/* <div>
          Idée animation : Jouer avec .screen-frame .screen-layer:last-child
          display: flex;
        </div> */}
        <Cover />
        <Service />
        <Work />
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
