import styled from "styled-components";
import Link from "next/link";

export const StyledNewIndex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: var(--padding-sides);
  //box-shadow: var(--box-shadow);
  color: var(--primary-color-text);
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  border: solid thin;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color-text);
`;
