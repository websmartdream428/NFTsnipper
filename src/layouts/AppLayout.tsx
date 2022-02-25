import React, { useState } from "react";
import styled from "styled-components";
import { AppFooter } from "./footer";
import { Sidebar } from "./sidebar";
import { MenuLogo } from "components";

export const AppWrapper = styled.div``;
export const AppContainer = styled.div`
  padding-left: 288px;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

const AppLayout = ({ children }: any) => {
  const [menuShow, setMenuShow] = useState(false);

  const handleClick = () => {
    setMenuShow(true);
  };

  const handleCancel = () => {
    setMenuShow(false);
  };

  return (
    <AppWrapper>
      <Sidebar active={menuShow} onCancel={handleCancel} />
      <AppContainer>
        <MenuLogo onClick={handleClick} />
        {children}
        <AppFooter />
      </AppContainer>
    </AppWrapper>
  );
};

export default AppLayout;
