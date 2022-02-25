import React from "react";
import { CollectionPart, FeaturedPart, Header } from "views/indexPage";
import { IndexWrapper } from "./Index.styles";

const IndexPage = () => {
  return (
    <IndexWrapper>
      <Header />
      <FeaturedPart />
      <CollectionPart />
    </IndexWrapper>
  );
};

export default IndexPage;
