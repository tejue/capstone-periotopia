import styled from "styled-components";

const StyledIndex = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
`;

const StyledIndexFilled = styled.div`
  height: 100%;
  background-color: lightcoral;
  width: ${(props) => props.width};
`;

export default function PeriotopiaIndex({ periotopiaIndexFinancials }) {
  return (
    <>
      <h2>Dein Periotopia-Index</h2>
      <StyledIndex>
        <StyledIndexFilled width={periotopiaIndexFinancials} />
      </StyledIndex>
    </>
  );
}
