import styled from "styled-components";

export const StyledPeriotopiaIndex = styled.section`
  margin: 20px 10px;
  padding: 0.5px;
`;

export const StyledIndex = styled.div`
  width: 100%;
  height: 20px;
  background-color: #fbfbfb;
  border: solid 0.1px var(--tertier-highlight-color);
`;

export const StyledIndexFilled = styled.div`
  height: 100%;
  background-color: var(--tertier-highlight-color);
  width: ${(props) => props.width};
`;
