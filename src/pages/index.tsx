import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        Idée animation : Jouer avec .screen-frame .screen-layer:last-child
        display: flex;
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
