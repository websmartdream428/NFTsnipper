import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  width: 240px;
  height: 100vh;
  padding: 32px 16px 32px 32px;
  background-color: rgb(18, 18, 23);
  top: 0;
  left: 0;
`;

export const SideMenuWrapper = styled.div`
  padding-top: 40px;
  & > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const MenuItem = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5rem;
  position: relative;
  ::before {
    content: " ";
    background-color: white;
    height: 1px;
    width: 20px;
    position: absolute;
    top: 50%;
    left: -32px;
  }
`;

export const SidebarButtonGroup = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin-top: 24px;
  & > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const DiscordButton = styled.div`
  cursor: pointer;
  background-color: #7389da;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  border-radius: 9999px;
  img {
    height: 24px;
  }
`;
