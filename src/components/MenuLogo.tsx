import React from "react";
import styled from "styled-components";

import menuIcon from "assets/image/images-hamburger.svg";
import logoIcon from "assets/image/menu-logo.svg";

const MenuLogo = ({ onClick }: any) => {
  return (
    <LogoWrapper onClick={onClick}>
      <span>
        <img src={menuIcon} alt="menuIcon" className="menu-icon" />
        <img src={logoIcon} alt="logoIcon" className="logo-icon" />
      </span>
    </LogoWrapper>
  );
};

export default MenuLogo;

const LogoWrapper = styled.div`
  span {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
  padding: 20px 0 0 20px;
  .menu-icon {
    margin-right: 20px;
  }
  .logo-icon {
    width: 160px;
  }
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
