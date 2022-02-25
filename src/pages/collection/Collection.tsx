import React from "react";
import { ItemInfoCard } from "views/collectionPage";
import { CollectionWrapper } from "./Collection.styles";

const CollectionPage = () => {
  return (
    <CollectionWrapper>
      <ItemInfoCard />
    </CollectionWrapper>
  );
};

export default CollectionPage;
