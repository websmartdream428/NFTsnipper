import React from "react";
import { Button, LogoImg } from "components";
import {
  DiscordButton,
  MenuItem,
  SidebarButtonGroup,
  SidebarOverLay,
  SidebarWrapper,
  SideMenuWrapper,
} from "./Sidebar.styles";

import DiscordBtnImg from "assets/image/images-discord-button.svg";

const Sidebar = ({ active, onCancel }: any) => {
  return (
    <>
      <SidebarWrapper active={active}>
        <span className="close" onClick={onCancel}>
          X
        </span>
        <LogoImg />
        <SideMenuWrapper>
          <MenuItem active={true}>{"Home"}</MenuItem>
          <MenuItem>{"Upcoming drops"}</MenuItem>
          <MenuItem>{"Services & ADS"}</MenuItem>
        </SideMenuWrapper>
        <SidebarButtonGroup>
          <Button label="submit collection" fColor="#2a2d3e" />
          <DiscordButton>
            <img src={DiscordBtnImg} alt="DiscordBtnImg" />
          </DiscordButton>
        </SidebarButtonGroup>
      </SidebarWrapper>
      <SidebarOverLay active={active} onClick={onCancel} />
    </>
  );
};

export default Sidebar;
