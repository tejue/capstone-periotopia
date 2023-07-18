import styled from "styled-components";
import PeriotopiaIndex from "../PeriotopiaIndex";

const StyledResultCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function ResultCard({
  costsPerYear,
  formatNumber,
  perInd,
  taxAmount: financialsTaxAmount,
}) {
  const numberPerInd = parseInt(perInd.toString().replace("%", "") / 10);
  const taxAmount = {
    full: "volle Steuer",
    none: "keine Steuer",
    partial: "reduzierte Steuer",
  };

  return (
    <StyledResultCard>
      <h3>Dein Periotopia-Index</h3>
      <p>
        Finanzen:
        <br /> Für deine Menstruationsprodukte zahlst du{" "}
        {formatNumber(costsPerYear)} Euro pro Jahr und{" "}
        {taxAmount[financialsTaxAmount]}. Dieser Periotopia-Index beträgt damit:{" "}
        {numberPerInd}/10
      </p>
      <PeriotopiaIndex periotopiaIndex={perInd} />
    </StyledResultCard>
  );
}
