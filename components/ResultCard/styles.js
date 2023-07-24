import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledResultCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: 15px;
  margin-bottom: 5px;
  box-shadow: var(--box-shadow);
`;
