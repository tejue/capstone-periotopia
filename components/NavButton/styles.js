import styled from "styled-components";

export const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 25px 0;
`;

export const Button = styled.button`
  background-color: transparent;
  color: var(--primary-highlight-color);
  font-size: 16px;
  padding: 20px 20px;
  border-radius: 50%;
  border: solid 4px;
  text-decoration: none;
  position: relative;

  &:hover {
    background-color: var(--primary-highlight-color);
    opacity: 50%;
  }

  &:active {
    background-color: var(--background-color);
    opacity: 50%;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: -5%;
  left: -3%;
  pointer-events: none;
`;
