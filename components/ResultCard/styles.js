import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledResultCard = styled.li`
  list-style: none;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: 25px 15px 15px 15px;
  margin: 15px 10px;
  border: none;
  border-radius: 5px;
  position: relative;
`;

export const CardTitelWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const CardHeading = styled.h2`
  font-size: 16px;
  margin: 5px 0;
  font-weight: 900;
`;

export const CardEnding = styled.p`
  font-size: 16px;
  font-weight: 900;
  text-align: end;
  margin-right: 10px;
  overflow-wrap: break-word;
`;

export const CardParagraphWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  padding: 10px 0;
`;

export const CardParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0 10px 0 0;
`;

export const IconWrapDelete = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
`;

export const IconWrapOpenClose = styled.div`
  position: absolute;
  left: -5px;
  top: -5px;
  transform: rotate(${(props) => props.rotate}deg);
`;

export const IconWrapper = styled.div``;
