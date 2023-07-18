import styled from "styled-components";

const StyledResultCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function ResultCard({ costsPerYear, formatNumber }) {
  console.log(costsPerYear);
  return (
    <StyledResultCard>
      <h3>Dein Periotopia-Index</h3>
      <p>
        Finanzen: Für deine Menstruationsprodukte zahlst du{" "}
        {formatNumber(costsPerYear)} Euro pro Jahr
      </p>
      <h4>Periotopia-Index</h4>
    </StyledResultCard>
  );
}
