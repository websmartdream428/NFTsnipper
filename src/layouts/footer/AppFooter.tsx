import React from "react";
import { FooterWrapper } from "./AppFooter.styles";

const AppFooter = () => {
  return (
    <FooterWrapper>
      Copyright © {new Date().getFullYear()} NFTsniper. All rights reserved.
    </FooterWrapper>
  );
};

export default AppFooter;
