import styled from "styled-components";

const StyledPeriotopiaIndex = styled.section`
  background-color: lightcoral;
  margin: 20px 0;
  padding: 20px;
`;

const StyledIndex = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
`;

const StyledIndexFilled = styled.div`
  height: 100%;
  background-color: #e3005f;
  width: ${(props) => props.width};
`;

export default function PeriotopiaIndex({ periotopiaIndexFinancials }) {
  return (
    <StyledPeriotopiaIndex>
      <h2>Dein Periotopia-Index</h2>
      <StyledIndex>
        <StyledIndexFilled width={periotopiaIndexFinancials} />
      </StyledIndex>
    </StyledPeriotopiaIndex>
  );
}
