import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  max-width: 400px;
  input {
    line-height: 1.75rem;
    border-radius: 9999px;
    border: 1px solid #6b7280;
    width: -webkit-fill-available;
    padding: 0.5rem 3rem 0.5rem 1.5rem;
    background: #121217;
    font-size: 1rem;
    color: #fff;
    outline: none;
    :focus {
      border: 2px solid rgba(59, 130, 246);
    }
  }
`;

const FormInput = () => {
  return (
    <InputWrapper>
      <input type="text" />
    </InputWrapper>
  );
};

export default FormInput;
