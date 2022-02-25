import React, { useState } from "react";
import styled from "styled-components";

import arrowImg from "assets/image/chevron.png";

const CustomSelect = (props: any) => {
  const [selected, setSelected] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = (value: string) => {
    setSelected(value);
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <SelectWrapper>
      <Select onClick={handleToggle}>
        {selected}
        <img src={arrowImg} alt="arrowImg" />
      </Select>
      {toggle && (
        <OptionWrapper>
          {props.data.map((item: any, key: any) => (
            <Option key={key} onClick={() => handleClick(item.label)}>
              {item.label}
            </Option>
          ))}
        </OptionWrapper>
      )}
    </SelectWrapper>
  );
};

export default CustomSelect;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.div`
  width: 9rem;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121217;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0 8px;
  border-radius: 0.375rem;
  img {
    transform: rotate(90deg);
    width: 7px;
    margin-right: 5px;
  }
`;

const OptionWrapper = styled.div`
  position: absolute;
  background-color: #121217;
  margin-top: 5px;
  border-radius: 0.375rem;
  width: calc(100% - 16px);
  padding: 5px 8px;
  z-index: 9999;
`;

const Option = styled.p`
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
