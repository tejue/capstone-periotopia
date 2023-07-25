import styled from "styled-components";

export const StyledPeriotopiaIndex = styled.section`
  background-color: var(--highlight-color);
  margin: 5px 10px;
  padding: 0.5px;
`;

export const StyledIndex = styled.div`
  width: 100%;
  height: 20px;
  background-color: var(--background-color);
`;

export const StyledIndexFilled = styled.div`
  height: 100%;
  background-color: #e3005f;
  width: ${(props) => props.width};
`;