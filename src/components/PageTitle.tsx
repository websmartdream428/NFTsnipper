import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h2`
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
  align-items: flex-end;
  margin: 0;
  img {
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PageTitle = ({ children }: any) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default PageTitle;
