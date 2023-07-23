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
  menstruationDaysPerYearID,
  costsPerYearID,
  taxAmountID: financialsTaxAmountID,
  timePerYearID,
  periotopiaIndexFinancialsID,
  periotopiaIndexHygieneID,
  id,
  handleDeleteResultCard,
  formatNumber,
  formatTime,
}) {
  const numberPeriotopiaIndexFinancialsID = parseInt(
    periotopiaIndexFinancialsID.toString().replace("%", "") / 10
  );

  const numberperiotopiaIndexHygieneID = parseInt(
    periotopiaIndexHygieneID.toString().replace("%", "") / 10
  );

  const periotopiaIndexAverage =
    (numberPeriotopiaIndexFinancialsID + numberperiotopiaIndexHygieneID) / 2;

  function convertIndexAverage(number) {
    return (number * 10).toString() + "%";
  }

  const periotopiaIndex = convertIndexAverage(periotopiaIndexAverage);

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
                Du hast deine Menstruation an {menstruationDaysPerYearID} Tagen
                im Jahr.
              </p>
              <p>
                Für deine Menstruationsprodukte zahlst du{" "}
                {formatNumber(costsPerYearID)} Euro pro Jahr mit{" "}
                {taxAmountID[financialsTaxAmountID]}. Für den Faktor Geld ist
                das ein Periotopia-Index von {numberPeriotopiaIndexFinancialsID}
                /10.
              </p>
              <p>
                Für deine Menstruationshygiene brauchst du ca.{" "}
                {formatTime(timePerYearID)} im Jahr. Für den Faktor Hygiene ist
                das ein Periotopia-Index von {numberperiotopiaIndexHygieneID}
                /10.
              </p>
              Dein durchschnittlicher Periotopia-Index ist:{" "}
              {periotopiaIndexAverage}/10:
              <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
            </>
            // )}
          )}
        </StyledResultCard>
      </StyledList>
    </>
  );
}
