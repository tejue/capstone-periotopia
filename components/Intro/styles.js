import styled from "styled-components";
import Link from "next/link";

export const IntroHeading = styled.h1`
  font-size: 40px;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 50px;
`;

export const IntrotextWrapper = styled.div`
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: var(--padding-sides);
  box-shadow: var(--box-shadow);
`;

export const Footnote = styled.p`
  padding-top: var(--padding-sides);
  font-size: 70%;
`;

export const Startlink = styled(Link)`
  font-size: 25px;
  background-color: var(--primary-color);
  color: #fff7ff;
  text-decoration: none;
  padding: var(--padding-sides);
`;
