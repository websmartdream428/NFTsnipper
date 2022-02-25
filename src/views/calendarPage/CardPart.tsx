import React, { useState } from "react";
import styled from "styled-components";
import MintCard from "components/MintCard";
import { MintCardData } from "utils/data";
import arrowImg from "assets/image/chevron.png";

const TodayPart = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <CardWrapper>
      <div>
        <TitleWraper>
          <span>Today</span>
          <div className="line"></div>
        </TitleWraper>
        <CardGroup>
          <MintCard
            img={MintCardData[0].img}
            title={MintCardData[0].title}
            date={MintCardData[0].date}
            priceTitle={MintCardData[0].priceTitle}
            price={MintCardData[0].price}
          />
        </CardGroup>
      </div>
      <div>
        <TitleWraper>
          <span>24 FEB</span>
          <div className="line"></div>
          <p
            className={`arrow-top ${toggle && "show"}`}
            onClick={handleToggle}
          ></p>
        </TitleWraper>
        {toggle && (
          <CardGroup>
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
          </CardGroup>
        )}
      </div>
    </CardWrapper>
  );
};

export default TodayPart;

const CardWrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 3.5rem;
  }
`;

const TitleWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  span {
    color: #999ba6;
    text-transform: uppercase;
    font-size: 1rem;
    padding-right: 1rem;
    line-height: 1.5rem;
    white-space: nowrap;
  }
  .line {
    height: 1px;
    width: 85%;
    background: #2a2d3e;
  }
  p {
    margin: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(${arrowImg});
    background-color: #2a2d3e;
    border-radius: 9999px;
    transform: rotate(90deg);
    width: 2rem;
    height: 2rem;
    margin-left: 20px;
    transition: all 0.3s;
    @media screen and (max-width: 425px) {
      width: 2.5rem;
    }
  }
  .show {
    transform: rotate(-90deg);
  }
`;

const CardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.25rem;
  margin-top: 32px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
