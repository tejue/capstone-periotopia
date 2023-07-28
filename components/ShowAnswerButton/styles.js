import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  color: var(--primary-highlight-color);
  font-size: 16px;
  padding: 20px 20px;
  border-radius: 50%;
  border: solid 4px;
  width: 30px;
  height: 45px;
  text-decoration: none;

  &:hover {
    background-color: var(--primary-highlight-color);
    opacity: 50%;
  }

  &:active {
    background-color: var(--background-color);
    opacity: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  margin: -35px 15px 0 0;
  text-align: end;
`;

export const IconWrapper = styled.div`
  position: relative;
  top: -45px;
  right: 1px;
  pointer-events: none;
`;
