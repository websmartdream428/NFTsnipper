import styled from "styled-components";

export const SidebarWrapper = styled.div<{ active: boolean }>`
  position: fixed;
  width: 240px;
  height: 100vh;
  padding: 32px 16px 32px 32px;
  background-color: rgb(18, 18, 23);
  top: 0;
  left: 0;
  transition: all 0.3s;
  .close {
    display: none;
    position: absolute;
    top: 30px;
    right: 30px;
    font-weight: 700;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    left: ${({ active }) => (active ? "0" : "-388px")};
    z-index: 99999;
    .close {
      display: inline-block;
    }
  }
`;

export const SidebarOverLay = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000b0;
  z-index: 999;
  display: none;
  transition: all 0.3s;
  @media screen and (max-width: 768px) {
    display: block;
    opacity: ${({ active }) => (active ? "1" : "0")};
    visibility: ${({ active }) => (active ? "visible" : "hidden")};
  }
`;

export const SideMenuWrapper = styled.div`
  padding-top: 40px;
  & > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const MenuItem = styled.a<{ active?: boolean }>`
  display: block;
  cursor: pointer;
  :hover {
    color: #d77e7e80;
  }
  text-decoration: none;
  transition: all 0.3s;
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.5rem;
  position: relative;
  color: ${({ active }) => (active ? "#d77e7e" : "#fff")};
  ${({ active }) => active && "font-weight: 500"};
  ::before {
    content: " ";
    background-color: white;
    height: 1px;
    opacity: ${({ active }) => (active ? "1" : "0")};
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
