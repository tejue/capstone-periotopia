import styled from "styled-components";

const StyledPeriotopiaInfo = styled.section`
  background-color: lightcoral;
  margin-top: 20px;
  padding: 20px;
`;

export default function PeriotopiaInfo({ periotopiaInfoText }) {
  return <StyledPeriotopiaInfo>{periotopiaInfoText}</StyledPeriotopiaInfo>;
}
