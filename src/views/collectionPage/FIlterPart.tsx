import PageTitle from "components/PageTitle";
import React from "react";
import styled from "styled-components";
import { FilterCardData, SortSelectData } from "utils/data";
import { CustomSelect, FilterCard, FormInput } from "components";
import arrowImg from "assets/image/chevron.png";
import filterImg from "assets/image/filter.png";
import sortImg from "assets/image/sort.svg";

const FIlterPart = () => {
  return (
    <FilterPartWrapper>
      <FilterTitle>
        <PageTitle>NFTs in collection</PageTitle>
        <div className="filter-form">
          <FormInput placeholder="Search" icon={true} />
        </div>
      </FilterTitle>
      <SortBar>
        <FilterBy>
          <img src={filterImg} alt="filterImg" />
          <span>Filter by</span>
          <p>Attributes</p>
        </FilterBy>
        <SortBy>
          <img src={sortImg} alt="sortImg" />
          <span>Sort by</span>
          <CustomSelect data={SortSelectData} />
        </SortBy>
      </SortBar>
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

const CardGroup = styled.div`
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

const PaginationBar = styled.div`
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

const SortBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    & > *:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

const FilterBy = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
  span {
    color: #999ba6;
    padding-left: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  p {
    border: 2px solid #2a2d3e;
    border-radius: 0.375rem;
    margin-left: 12px;
    padding: 0.25rem 10px;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #999ba6;
    padding-left: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-right: 12px;
  }
`;
