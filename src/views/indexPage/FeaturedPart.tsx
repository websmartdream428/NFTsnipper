import React from "react";
import styled from "styled-components";

import PageTitle from "components/PageTitle";

import LightingSvg from "assets/image/lightning.svg";
import MintCard from "components/MintCard";
import { MintCardData } from "utils/data";

const FeaturedPart = () => {
  return (
    <FeaturedWrapper>
      <PageTitle>
        <img src={LightingSvg} alt="LightingSvg" />
        Featured
      </PageTitle>
      <MintCardGroup>
        {MintCardData.map((item: any, key: any) => (
          <MintCard
            key={key}
            img={item.img}
            title={item.title}
            date={item.date}
            priceTitle={item.priceTitle}
            price={item.price}
          />
        ))}
      </MintCardGroup>
    </FeaturedWrapper>
  );
};

export default FeaturedPart;

const FeaturedWrapper = styled.div`
  margin-top: 30px;
`;

const MintCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.25rem;
  margin-top: 32px;
`;
