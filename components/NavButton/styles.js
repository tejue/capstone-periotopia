import styled from "styled-components";

export const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;
`;

export const ButtonWrapperNext = styled.div`
  //margin: -35px 15px 0 0;
`;

export const ButtonWrapperPrev = styled.div`
  //margin: -35px 15px 0 0;
`;

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

export const IconWrapperNext = styled.div`
  position: relative;
  top: -50px;
  right: 0;
  pointer-events: none;
`;

export const IconWrapperPrev = styled.div`
  position: relative;
  top: -50px;
  right: 0;
  pointer-events: none;
`;
