import styled from "styled-components";
import PeriotopiaIndex from "../PeriotopiaIndex";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledResultCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
  margin: 10px;
`;

export default function ResultCard({
  costsPerYearID,
  formatNumber,
  periotopiaIndexID,
  taxAmountID: financialsTaxAmountID,
  handleDeleteResultCard,
  id,
}) {
  const numberPeriotopiaIndexID = parseInt(
    periotopiaIndexID.toString().replace("%", "") / 10
  );
  const taxAmountID = {
    full: "voller Steuer",
    none: "keiner Steuer",
    partial: "reduzierter Steuer",
  };

  const [isResultVisible, setIsResultVisible] = useState(false);
  function handleToggle() {
    setIsResultVisible(!isResultVisible);
  }

  function handleDelete() {
    confirmAlert({
      title: "Confirm to submit",
      message: "Möchtest du diesen Periotopia-Index wirklich löschen?",
      buttons: [
        {
          label: "Ja",
          onClick: () => {
            handleDeleteResultCard(id);
          },
        },
        {
          label: "Nein, doch nicht",
        },
      ],
    });
  }

  return (
    // costsPerYearID >= 0 && (
    <>
      <button onClick={handleDelete}>X</button>
      <button onClick={handleToggle}>click</button>
      <StyledList>
        <StyledResultCard>
          <h3>Dein Periotopia-Index</h3>
          {isResultVisible && (
            //  {/* {costsPerYear >= 0 && ( */}
            <>
              <p>
                Geld:
                <br /> Für deine Menstruationsprodukte zahlst du{" "}
                {formatNumber(costsPerYearID)} Euro pro Jahr bei{" "}
                {taxAmountID[financialsTaxAmountID]}. Auf dem Periotopia-Index
                ist das ein Score von {numberPeriotopiaIndexID}/10
              </p>
              <PeriotopiaIndex periotopiaIndex={periotopiaIndexID} />
            </>
            // )}
          )}
        </StyledResultCard>
      </StyledList>
    </>
  );
}
