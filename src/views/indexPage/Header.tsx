import FormInput from "components/FormInput";
import React from "react";
import styled from "styled-components";

import LightModeSvg from "assets/image/light_mode.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <FormInput />
      <StatBar>
        <StatWrapper>
          <StatItem>
            <h2>2</h2>
            <p>Collections</p>
          </StatItem>
          <StatItem>
            <h2>6632</h2>
            <p>Sales</p>
          </StatItem>
          <StatItem>
            <h2>431.49k</h2>
            <p>Volume</p>
          </StatItem>
        </StatWrapper>
        <img src={LightModeSvg} alt="LightModeSvg" />
      </StatBar>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 0;
  background-color: #121217;
  border-radius: 8px;
  & > *:not(:first-child) {
    border-left: 1px solid rgba(42, 45, 62, 0.4);
  }
`;

const StatItem = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  padding: 5px 0;
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 12px;
    color: #6b7280;
  }
`;

const StatBar = styled.div`
  display: inline-flex;
  width: -webkit-fill-available;
  justify-content: flex-end;
  align-items: center;
  img {
    margin: 0 32px;
    cursor: pointer;
  }
`;
