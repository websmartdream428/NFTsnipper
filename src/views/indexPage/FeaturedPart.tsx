import React from "react";
import styled from "styled-components";

import PageTitle from "components/PageTitle";

import LightingSvg from "assets/image/lightning.svg";
import MintCard from "components/MintCard";

import MintImg1 from "assets/image/mint1.jpg";
import MintImg2 from "assets/image/mint2.jpg";
import MintImg3 from "assets/image/mint3.jpg";
import MintImg4 from "assets/image/mint4.jpg";

const FeaturedPart = () => {
  return (
    <FeaturedWrapper>
      <PageTitle>
        <img src={LightingSvg} alt="LightingSvg" />
        Featured
      </PageTitle>
      <MintCardGroup>
        <MintCard
          img={MintImg1}
          title="Antisocial Ape Club"
          date="5 Feb - 19:00"
          priceTitle="Floor price"
          price="4.2"
        />
        <MintCard
          img={MintImg2}
          title="NEARNauts"
          priceTitle="Mint price"
          price="0.77"
        />
        <MintCard
          img={MintImg3}
          title="Solpacas"
          date="17 Feb - 17:30"
          priceTitle="Floor price"
          price="0.15"
        />
        <MintCard
          img={MintImg4}
          title="Bōryoku Dragonz"
          date="4 Nov - 00:31"
          priceTitle="Floor price"
          price="343"
        />
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
