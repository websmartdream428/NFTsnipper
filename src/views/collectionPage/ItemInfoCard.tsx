import React from "react";
import styled from "styled-components";
import PageTitle from "components/PageTitle";
import { MintCardData } from "utils/data";

import calendarIcon from "assets/image/calendar-white.svg";
import protocolIcon from "assets/image/near-protocol-logo.svg";

import discordIcon from "assets/image/discord.svg";
import telegramIcon from "assets/image/telegram.svg";
import twitterIcon from "assets/image/twitter.svg";
import websiteIcon from "assets/image/website.svg";

const ItemInfoCard = () => {
  return (
    <CardWrapper>
      <InfoImg>
        <img src={MintCardData[0].img} alt="InfoImg" />
      </InfoImg>
      <InfoContent>
        <PageTitle>Antisocial Ape Club</PageTitle>
        <InfoDesc>
          The Geobots are the first cross-chain NFT, AMM project on Solana, that
          aim to provide the highest level of utility and holder benefits. he
          Geobots are the first cross-chain NFT, AMM project on Solana, that aim
          to provide the highest level of utility and holder benefits
        </InfoDesc>
        <InfoDetails>
          <DetailItem>
            <p>{"RELEASE DATE (UTC)"}</p>
            <h2>
              <img src={calendarIcon} className="calendar" alt="calendarIcon" />
              1 Dec - 11:46 AM
            </h2>
          </DetailItem>
          <DetailItem>
            <p>{"MINT PRICE"}</p>
            <h2>
              <img src={protocolIcon} className="protocol" alt="calendarIcon" />
              —
            </h2>
          </DetailItem>
          <DetailItem>
            <p>{"SUPPLY"}</p>
            <h2>—</h2>
          </DetailItem>
        </InfoDetails>
        <SocialLinkGroup>
          <p>
            <img src={discordIcon} alt="discordIcon" />
          </p>
          <p>
            <img src={telegramIcon} alt="telegramIcon" />
          </p>
          <p>
            <img src={twitterIcon} alt="twitterIcon" />
          </p>
          <p>
            <img src={websiteIcon} alt="websiteIcon" /> <span>Website</span>
          </p>
        </SocialLinkGroup>
      </InfoContent>
    </CardWrapper>
  );
};

export default ItemInfoCard;

const CardWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const InfoImg = styled.div`
  width: 20%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  img {
    border-radius: 0.5rem;
    width: 100%;
  }
`;

const InfoContent = styled.div`
  width: 75%;
  padding-top: 24px;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const InfoDesc = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #999ba6;
  margin-top: 24px;
  margin-bottom: 20px;
`;

const InfoDetails = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid #2a2d3e;
  & > *:not(:first-child) {
    margin-left: 25px;
  }
`;

const DetailItem = styled.div`
  h2,
  p {
    margin: 0;
  }
  p {
    font-weight: 400;
    padding-bottom: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #999ba6;
  }
  h2 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    .calendar {
      margin-right: 10px;
    }
    .protocol {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 10px;
    }
  }
`;

const SocialLinkGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    padding: 0 12px;
    background-color: #121217;
    border-radius: 9999px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      background-color: #30303f;
    }
    img {
      width: 18px;
    }
    span {
      text-transform: uppercase;
      margin-left: 8px;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;
