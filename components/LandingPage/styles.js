import styled from "styled-components";
import Link from "next/link";

export const LandingPageTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 900;
`;

export const LandingPageSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 300;
  line-height: 2;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: 40px 20px;
  margin: 0px 10px;
  border-radius: 5px;
  position: relative;
`;

export const Footnote = styled.p`
  margin-top: 40px;
  font-size: 0.7rem;
`;

export const StartLink = styled(Link)`
  text-decoration: none;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: -100px;
  right: ${({ $click }) => ($click ? "15px" : "-10px")};
`;
