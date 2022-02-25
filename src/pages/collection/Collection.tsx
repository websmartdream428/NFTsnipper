import React from "react";
import { ItemInfoCard } from "views/collectionPage";
import MarketPlacePart from "views/collectionPage/MarketPlacePart";
import { CollectionWrapper } from "./Collection.styles";

const CollectionPage = () => {
  return (
    <CollectionWrapper>
      <ItemInfoCard />
      <MarketPlacePart />
    </CollectionWrapper>
  );
};

export default CollectionPage;
