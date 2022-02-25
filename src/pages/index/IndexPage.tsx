import React from "react";
import { FeaturedPart, Header } from "views/indexPage";
import { IndexWrapper } from "./Index.styles";

const IndexPage = () => {
  return (
    <IndexWrapper>
      <Header />
      <FeaturedPart />
    </IndexWrapper>
  );
};

export default IndexPage;
