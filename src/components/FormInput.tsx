import React from "react";
import styled from "styled-components";

import searchIcon from "assets/image/search.svg";

const InputWrapper = styled.div`
  position: relative;
  width: -webkit-fill-available;
  input {
    width: -webkit-fill-available;
    line-height: 1.75rem;
    border-radius: 9999px;
    border: 1px solid #6b7280;
    padding: 0.5rem 3rem 0.5rem 1.5rem;
    background: #121217;
    font-size: 1rem;
    color: #fff;
    outline: none;
    :focus {
      border: 2px solid rgba(59, 130, 246);
    }
  }
  img {
    position: absolute;

    top: 25%;
    right: 15px;
  }
`;

const FormInput = (props: any) => {
  return (
    <InputWrapper>
      <input type="text" placeholder={props.placeholder} />
      {props.icon && <img src={searchIcon} alt="icon" />}
    </InputWrapper>
  );
};

export default FormInput;
