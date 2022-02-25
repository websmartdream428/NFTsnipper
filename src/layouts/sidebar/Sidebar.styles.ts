import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  width: 240px;
  height: 100vh;
  padding: 32px 16px 32px 32px;
  background-color: rgb(18, 18, 23);
  top: 0;
  left: 0;
  transition: all 0.3s;
  @media screen and (max-width: 768px) {
    left: -388px;
  }
`;

export const SideMenuWrapper = styled.div`
  padding-top: 40px;
  & > *:not(:first-child) {
    margin-top: 16px;
  }
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  cursor: pointer;
  :hover {
    color: #d77e7e80;
  }
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
