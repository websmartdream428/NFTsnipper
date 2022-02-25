import React from "react";
import styled from "styled-components";

const FilterCard = (props: any) => {
  return (
    <CardWrapper>
      <div className="card-image">
        <img src={props.img} alt="filterCard" />
      </div>
      <CardInfo>
        <div className="rank card-info">
          <p>RANK</p>
          <h2>{props.rank}</h2>
        </div>
        <div className="no card-info">
          <p>ITEM NO.</p>
          <h2>#{props.no}</h2>
        </div>
      </CardInfo>
    </CardWrapper>
  );
};

export default FilterCard;

const CardWrapper = styled.div`
  :active {
    transform: scale(1.03);
  }
  transition: all 0.2s;
  cursor: pointer;
  background-color: #121217;
  border-radius: 0.5rem;
  width: 100%;
  .card-image {
    position: relative;
    width: 100%;
    padding-top: 100%;
    img {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      border-radius: 0.5rem;
    }
  }
`;

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  .card-info {
    text-align: center;
    p {
      color: #999ba6;
      font-size: 10px;
      line-height: 1.25rem;
    }
    h2 {
      line-height: 1.25rem;
      font-size: 20px;
      color: #fff;
      font-weight: 500;
    }
  }
  .rank {
    border-right: 1px solid #2a2d3e;
  }
`;
