import React from "react";
import styled from "styled-components";
import { Sidebar } from "./sidebar";

export const AppWrapper = styled.div``;
export const AppContainer = styled.div`
  padding-left: 288px;
`;

const AppLayout = ({ children }: any) => {
  return (
    <AppWrapper>
      <Sidebar />
      <AppContainer>{children}</AppContainer>
    </AppWrapper>
  );
};

export default AppLayout;
