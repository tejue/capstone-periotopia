import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledResultCard = styled.li`
  list-style: none;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: 15px;
  margin: 10px 10px;
  border: none;
  border-radius: 5px;
  position: relative;
`;

export const StyledCardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
`;

export const StyledCardHeading = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 5px 0;
`;

export const CardParagraphWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  padding: 10px 0;
`;

export const IconWrap = styled.div``;

export const CardParagraph = styled.p`
  font-weight: 100;
  line-height: 1.3;
  margin: 0;
`;

export const IconWrapDelete = styled.div`
  position: absolute;
  right: 5px;
  top: -10px;
`;

export const IconWrapOpenClose = styled.div`
  position: absolute;
  left: 5px;
  top: -10px;
`;
