import React from "react";
import styled from "styled-components";
import { AppFooter } from "./footer";
import { Sidebar } from "./sidebar";

export const AppWrapper = styled.div``;
export const AppContainer = styled.div`
  padding-left: 288px;
`;

const AppLayout = ({ children }: any) => {
  return (
    <AppWrapper>
      <Sidebar />
      <AppContainer>
        {children}
        <AppFooter />
      </AppContainer>
    </AppWrapper>
  );
};

export default AppLayout;
