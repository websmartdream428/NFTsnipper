import React from "react";
import styled from "styled-components";

import { Button } from "components";

import MarketImg from "assets/image/market.png";
import listedImg from "assets/image/listed.svg";
import protocolImg from "assets/image/near-protocol-logo.svg";
import TableBadge from "components/TableBadge";

const DesktopMarket = () => {
  return (
    <div className="desktop-market market">
      <img src={MarketImg} alt="MarketImg" className="market-img" />
      <span className="listed">
        <img src={listedImg} alt="listedImg" /> Listed
      </span>
      <div>
        <span className="market-row-name">Floor Price</span>
        <p className="market-row-value">
          <img src={protocolImg} alt="protocolImg" /> 8
        </p>
      </div>
      <div>
        <span className="market-row-name">
          Volume
          <TableBadge label="24h" />
        </span>
        <p className="market-row-value">
          <img src={protocolImg} alt="protocolImg" /> 8
        </p>
      </div>
      <Button label="Visit" fColor="#2a2d3e" />
    </div>
  );
};

const MobileMarket = () => {
  return (
    <div className="mobile-market market">
      <div className="mobile-market-row">
        <img src={MarketImg} alt="MarketImg" className="market-img" />
        <div className="mobile-listed">
          <span className="listed">
            <img src={listedImg} alt="listedImg" /> Listed
          </span>
          <Button label="Visit" fColor="#2a2d3e" />
        </div>
      </div>
      <div className="mobile-market-row">
        <span className="market-row-name">Floor Price</span>
        <p className="market-row-value">
          <img src={protocolImg} alt="protocolImg" /> 8
        </p>
      </div>
      <div className="mobile-market-row">
        <span className="market-row-name">
          Volume
          <TableBadge label="24h" />
        </span>
        <p className="market-row-value">
          <img src={protocolImg} alt="protocolImg" /> 8
        </p>
      </div>
    </div>
  );
};

const MarketPlacePart = () => {
  return (
    <MarketPlaceWrapper>
      <p className="title">MARKETPLACES</p>
      <DesktopMarket />
      <MobileMarket />
    </MarketPlaceWrapper>
  );
};

export default MarketPlacePart;

const MarketPlaceWrapper = styled.div`
  margin-top: 2.5rem;

  .title {
    margin: 0;
    color: #999ba6;
    margin-bottom: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .market {
    display: flex;
    width: 100%;

    .market-img {
      height: 2.25rem;
    }
    padding: 12px 0;
  }
  .desktop-market {
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #2a2d3e;
    border-bottom: 1px solid #2a2d3e;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .mobile-market {
    flex-direction: column;
    display: none;
    @media screen and (max-width: 1024px) {
      display: grid;
    }
  }
  .mobile-listed {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .mobile-market-row {
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #2a2d3e;
  }
  .listed {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    img {
      margin-right: 7px;
    }
  }
  .market-row-name {
    text-transform: uppercase;
    color: #999ba6;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .market-row-value {
    margin: 0;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
      justify-content: flex-start;
      margin-top: 0;
    }
    margin-top: 5px;
    justify-content: flex-end;
    img {
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }
  }
`;
