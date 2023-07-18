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
  periotopiaIndex,
  taxAmount: financialsTaxAmount,
}) {
  const numberperiotopiaIndex = parseInt(
    periotopiaIndex.toString().replace("%", "") / 10
  );
  const taxAmount = {
    full: "volle Steuer",
    none: "keine Steuer",
    partial: "reduzierte Steuer",
  };

  return (
    costsPerYear >= 0 && (
      <StyledResultCard>
        <h3>Dein Periotopia-Index</h3>
        {costsPerYear >= 0 && (
          <p>
            Finanzen:
            <br /> Für deine Menstruationsprodukte zahlst du{" "}
            {formatNumber(costsPerYear)} Euro pro Jahr und{" "}
            {taxAmount[financialsTaxAmount]}. Dieser Periotopia-Index beträgt
            damit: {numberperiotopiaIndex}/10
          </p>
        )}
        <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
      </StyledResultCard>
    )
  );
}
