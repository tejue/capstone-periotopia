import styled from "styled-components";
import Link from "next/link";

export const IntroHeading = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 900;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 5px;
  text-align: center;
  font-weight: 300;
  line-height: 2;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: 30px;
  margin: 0px 10px;
  border-radius: 5px;
`;

export const Footnote = styled.p`
  font-size: 0.7rem;
`;

export const Startlink = styled(Link)`
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  border: solid;
  height: 80px;
  text-align: center;
  margin-top: 30px;
`;
