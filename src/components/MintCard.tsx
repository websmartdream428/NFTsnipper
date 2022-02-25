import React from "react";
import styled from "styled-components";

import CalendarSvg from "assets/image/calendar.svg";
import ProtocolSvg from "assets/image/near-protocol-logo.svg";

const MintCard = (props: any) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={props.img} alt="mintcard" />
      </ImgWrapper>
      <CardInfo>
        <h2>{props.title}</h2>
        <p>
          <img src={CalendarSvg} alt="CalendarSvg" />
          {props.date ? props.date : "--"}
        </p>
      </CardInfo>
      <CardFooter>
        <span>{props.priceTitle}</span>
        <img src={ProtocolSvg} alt="ProtocolSvg" />
        <h2>{props.price}</h2>
      </CardFooter>
    </CardWrapper>
  );
};

export default MintCard;

const CardWrapper = styled.div`
  border-radius: 0.5rem;
  background-color: #121217;
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding-top: 85%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  padding: 12px;
  h2,
  p {
    margin: 0;
  }
  h2 {
    line-height: 1.5rem;
    font-size: 1.125rem;
    font-weight: 500;
    text-overflow: ellipsis;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #6b7280;
    margin-top: 10px;
    img {
      margin-right: 10px;
    }
  }
`;

export const CardFooter = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  border-top: 1px solid #1a1c29;
  span {
    text-transform: uppercase;
    font-size: 0.63rem;
    margin-right: 0.75rem;
    color: #999ba6;
  }
  img {
    width: 20px;
    margin-right: 12px;
  }
  h2 {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
`;
