import styled from "styled-components";

const StyledPeriotopiaInfo = styled.section`
  background-color: lightcoral;
  margin: 20px 0;
  padding: 20px;
`;

export default function PeriotopiaInfo({ periotopiaInfoText }) {
  return <StyledPeriotopiaInfo>{periotopiaInfoText}</StyledPeriotopiaInfo>;
}
