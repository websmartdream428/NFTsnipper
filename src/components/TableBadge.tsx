import React from "react";
import styled from "styled-components";

const TableBadge = (props: any) => {
  return <BadgeWrapper>{props.label}</BadgeWrapper>;
};

export default TableBadge;

const BadgeWrapper = styled.span`
  border-radius: 0.375rem;
  color: #232323;
  font-size: 0.63rem;
  background-color: #ef7e7e;
  margin-left: 0.5rem;
  padding-bottom: 1px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 2px;
  text-transform: lowercase;
`;
