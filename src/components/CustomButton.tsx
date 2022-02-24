import React from "react";
import styled from "styled-components";

interface BtnProps {
  bgColor?: string;
  fColor?: string;
  fFace?: string;
}

const ButtonWrapper = styled.div<BtnProps>`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ bgColor }) =>
    bgColor
      ? bgColor
      : "linear-gradient(273.19deg, #d77e7e 4.57%, #f86969 95.62%)"};
  color: ${({ fColor }) => fColor};
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 28px;
  border-radius: 9999px;
  line-height: 1.5rem;
  font-weight: 500;
  font-size: 0.875rem;
`;

const CustomButton = (props: any) => {
  return (
    <ButtonWrapper
      bgColor={props.bgColor}
      fFace={props.fFace}
      fColor={props.fColor}
    >
      {props.label}
    </ButtonWrapper>
  );
};

export default CustomButton;
