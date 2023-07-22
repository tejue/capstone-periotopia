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
  periotopiaIndexFinancialsID,
  periotopiaIndexHygieneID,
  taxAmountID: financialsTaxAmountID,
  handleDeleteResultCard,
  id,
  formatTime,
  menstruationDaysPerYearID,
  // timePerYearID,
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
                Allgemein:
                <br /> Du hast deine Menstruation an {
                  menstruationDaysPerYearID
                }{" "}
                Tagen pro Jahr.
              </p>
              <p>
                Geld:
                <br /> Für deine Menstruationsprodukte zahlst du{" "}
                {formatNumber(costsPerYearID)} Euro pro Jahr bei{" "}
                {taxAmountID[financialsTaxAmountID]}. Auf dem Periotopia-Index
                ist das ein Score von {numberPeriotopiaIndexFinancialsID}/10
              </p>
              <p>
                Hygiene:
                <br /> Für deine Menstruationshygiene brauchst du pro Jahr. Auf
                dem Periotopia-Index ist das ein Score von{" "}
                {numberperiotopiaIndexHygieneID}/10
              </p>
              <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
            </>
            // )}
          )}
        </StyledResultCard>
      </StyledList>
    </>
  );
}
