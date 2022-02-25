import PageTitle from "components/PageTitle";
import React from "react";
import styled from "styled-components";
import { FilterCardData } from "utils/data";
import { FilterCard, FormInput } from "components";
import arrowImg from "assets/image/chevron.png";

const FIlterPart = () => {
  return (
    <FilterPartWrapper>
      <FilterTitle>
        <PageTitle>NFTs in collection</PageTitle>
        <div className="filter-form">
          <FormInput placeholder="Search" icon={true} />
        </div>
      </FilterTitle>
      <CardGroup>
        {FilterCardData.map((item: any, key: any) => (
          <FilterCard key={key} img={item.img} rank={item.rank} no={item.no} />
        ))}
      </CardGroup>
      <PaginationBar>
        <p className="prev-page page-btn">1</p>
        <p className="page-count page-btn">223</p>
        <p className="next-page page-btn">
          <img src={arrowImg} alt="arrowImg" />
        </p>
      </PaginationBar>
    </FilterPartWrapper>
  );
};

export default FIlterPart;

const FilterPartWrapper = styled.div`
  margin-top: 5rem;
`;

const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > *:not(:first-child) {
      margin-top: 15px;
    }
    .filter-form {
      width: 100%;
    }
  }
`;

export const CardGroup = styled.div`
  display: grid;
  margin-top: 30px;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const PaginationBar = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  .page-btn {
    display: flex;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    background-color: #121217;
    border-radius: 9999px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    cursor: pointer;
  }
  .prev-page {
    color: #d77e7e;
  }
  .page-count {
    color: #999ba6;
  }
  .next-page {
  }
`;
