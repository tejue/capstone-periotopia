import styled from "styled-components";

const StyledIndex = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
`;

export default function PeriotopiaIndex({
  calculatedPeriotopiaIndexFinancials,
}) {
  const StyledIndexFilled = styled.div`
    height: 100%;
    background-color: lightcoral;
    width: ${calculatedPeriotopiaIndexFinancials};
  `;

  return (
    <>
      <h2>Dein Periotopia-Index</h2>
      <StyledIndex>
        <StyledIndexFilled />
      </StyledIndex>
    </>
  );
}
