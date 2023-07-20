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
  costsPerYearID,
  formatNumber,
  periotopiaIndexID,
  taxAmountID: financialsTaxAmountID,
}) {
  const numberPeriotopiaIndexID = parseInt(
    periotopiaIndexID.toString().replace("%", "") / 10
  );
  const taxAmountID = {
    full: "voller Steuer",
    none: "keiner Steuer",
    partial: "reduzierter Steuer",
  };

  return (
    // costsPerYearID >= 0 && (
    <StyledResultCard>
      <h3>Dein Periotopia-Index</h3>
      {/* {costsPerYear >= 0 && ( */}
      <p>
        Geld:
        <br /> Für deine Menstruationsprodukte zahlst du{" "}
        {formatNumber(costsPerYearID)} Euro pro Jahr bei{" "}
        {taxAmountID[financialsTaxAmountID]}. Auf dem Periotopia-Index ist das
        ein Score von {numberPeriotopiaIndexID}/10
      </p>
      {/* )} */}
      <PeriotopiaIndex periotopiaIndex={periotopiaIndexID} />
    </StyledResultCard>
  );
  // );
}
