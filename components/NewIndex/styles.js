import styled from "styled-components";
import Link from "next/link";

export const StyledNewIndex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  margin: 0 10px 30px 10px;
  border-radius: 5px;
  padding: 0 15px;
  font-weight: 900;
`;

export const StyledLink = styled(Link)`
  border: solid;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--primary-highlight-color);
  font-weight: 900;
`;
