import React from "react";
import styled from "styled-components";
import LogoImg from "assets/image/logo.png";

const LogoWrapper = styled.div`
  width: 208px;
  height: 208px;
  img {
    width: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={LogoImg} alt="LogoImg" />
    </LogoWrapper>
  );
};

export default Logo;
