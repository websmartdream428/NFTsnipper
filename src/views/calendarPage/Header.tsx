import React from "react";
import styled from "styled-components";

import PageTitle from "components/PageTitle";
import arrowImg from "assets/image/chevron.png";
import calendarImg from "assets/image/calendar-1.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-title">
        <PageTitle>Upcoming Releases</PageTitle>
        <FilterWrapper>
          <FilterItem active={true}>Day</FilterItem>
          <FilterItem>Week</FilterItem>
        </FilterWrapper>
      </div>
      <div className="date-display">
        <CalendarArrow>
          <p className="arrow-prev"></p>
          <p className="arrow-next"></p>
        </CalendarArrow>
        <p className="date-badge">Today</p>
        <p className="date-range">
          23 Feb - 1 Mar <img src={calendarImg} alt="calendarImg" />
        </p>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  padding: 32px 0;
  .header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .date-display {
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    & > *:not(:first-child) {
      margin-left: 24px !important;
    }
    .date-badge {
      margin: 0;
      padding: 0.25rem 1rem;
      border-radius: 0.375rem;
      background-color: #121217;
      cursor: pointer;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .date-range {
      font-size: 1.125rem;
      line-height: 1.75rem;
      display: flex;
      align-items: center;
      img {
        margin-left: 20px;
      }
    }
  }
`;

const FilterWrapper = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #2a2d3e;
  display: flex;
`;

export const FilterItem = styled.p<{ active?: boolean }>`
  width: 5rem;
  cursor: pointer;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 4px 0;
  margin: 0;
  background: ${({ active }) => (active ? "#212332" : "#121217")};
`;

export const CalendarArrow = styled.div`
  display: flex;
  p {
    margin: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(${arrowImg});
    background-color: #2a2d3e;
    border-radius: 9999px;
    height: 2rem;
    width: 2rem;
  }
  .arrow-prev {
    margin-right: 1rem;
    transform: rotate(-180deg);
  }
`;
