import React from "react";
import {
  ItemInfoCard,
  MarketPlacePart,
  FilterPart,
} from "views/collectionPage";
import { CollectionWrapper } from "./Collection.styles";

const CollectionPage = () => {
  return (
    <CollectionWrapper>
      <ItemInfoCard />
      <MarketPlacePart />
      <FilterPart />
    </CollectionWrapper>
  );
};

export default CollectionPage;
