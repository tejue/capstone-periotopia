import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  color: var(--primary-highlight-color);
  font-size: 16px;
  padding: 20px 20px;
  border-radius: 50%;
  border: solid 5px;
  width: 30px;
  height: 45px;
  text-decoration: none;

  &:hover {
    background-color: var(--primary-highlight-color);
  }

  &:active {
    background-color: var(--background-color);
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  margin: -35px 15px 0 0;
  text-align: end;
`;

export const IconWrapper = styled.div`
  position: relative;
  top: -50px;
  right: 0;
  pointer-events: none;
`;
