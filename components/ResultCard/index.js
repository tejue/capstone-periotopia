import styled from "styled-components";
import PeriotopiaIndex from "../PeriotopiaIndex";
import { uid } from "uid";

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
  results,
}) {
  // const financialsTaxAmount = taxAmount;

  // const numberperiotopiaIndexID = parseInt(
  //   periotopiaIndexID.toString().replace("%", "") / 10
  // );
  const taxAmountID = {
    full: "volle Steuer",
    none: "keine Steuer",
    partial: "reduzierte Steuer",
  };

  console.log("whats this???", costsPerYearID);

  return (
    // costsPerYearID >= 0 && (

    <StyledResultCard>
      <h3>Dein Periotopia-Index</h3>
      {/* {costsPerYear >= 0 && ( */}
      <p>
        Finanzen:
        <br /> Für deine Menstruationsprodukte zahlst du {costsPerYearID}
        {/* {formatNumber(costsPerYear)}  */}
        Euro pro Jahr und{" "}
        {/* {taxAmount[financialsTaxAmount]}. Dieser Periotopia-Index */}
        beträgt damit:
        {/* {numberperiotopiaIndexID}/10 */}
      </p>
      {/* )} */}
      {/* <PeriotopiaIndex periotopiaIndexID={periotopiaIndexID} /> */}
    </StyledResultCard>
  );
  // );
}
