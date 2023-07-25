import PeriotopiaIndex from "../PeriotopiaIndex";
import FormField from "../FormField";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import Icon from "@mdi/react";
import { mdiChevronRightCircle } from "@mdi/js";
import { mdiAlphaXCircle } from "@mdi/js";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  StyledList,
  StyledResultCard,
  StyledCardHeading,
  StyledCardButton,
} from "./styles";

export default function ResultCard({
  menstruationDaysPerYearID,
  costsPerYearID,
  taxAmountID: financialsTaxAmountID,
  accessID,
  timePerYearID,
  periotopiaIndexFinancialsID,
  periotopiaIndexHygieneID,
  id,
  handleDeleteResultCard,
  formatNumber,
  formatTime,
  indexTitleID,
  handleIndexTitleChange,
}) {
  const [editIndexTitle, setEditIndexTitle] = useState(false);
  const [editedIndexTitle, setEditedIndexTitle] = useState(indexTitleID);

  function handleIndexEditToggle() {
    if (editIndexTitle) {
      handleIndexTitleChange(id, editedIndexTitle);
      setEditIndexTitle(false);
    } else {
      setEditIndexTitle(true);
    }
  }

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
      <Icon path={mdiAlphaXCircle} size={1} onClick={handleDelete} />
      <Icon path={mdiChevronRightCircle} size={1} onClick={handleToggle} />

      <StyledList>
        <StyledResultCard>
          <StyledCardButton onClick={handleIndexEditToggle}>
            {editIndexTitle ? "Speichern" : "Bearbeiten"}{" "}
          </StyledCardButton>
          {editIndexTitle ? (
            <FormField
              type="text"
              value={editedIndexTitle}
              onChange={(event) => setEditedIndexTitle(event.target.value)}

              //onChange={handleIndexTitleChange}
            />
          ) : (
            <StyledCardHeading>{indexTitleID}</StyledCardHeading>
          )}
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
                dein Periotopia-Index {numberPeriotopiaIndexFinancialsID}
                /10.
              </p>
              <p>
                {accessID === "yes"
                  ? `Du hast Zugang zu einer sauberen und sicheren Sanitäranlage um dein Menstruationsprodukt zu wechseln. Für den Hin- und Rückweg zu einer Sanitäranlage brauchst du bis zu ${formatTime(
                      timePerYearID
                    )} im Jahr.`
                  : `Du hast keinen Zugang zu einer sauberen und sicheren Sanitäranlage um deine Menstruationsprodukte zu wechseln oder brauchst für den Hin- und Rückweg mindestens ${formatTime(
                      timePerYearID
                    )} im Jahr.`}{" "}
                Für den Faktor Hygiene ist dein Periotopia-Index{" "}
                {numberperiotopiaIndexHygieneID}/10.
              </p>
              Dein gesamter Periotopia-Index ist: {periotopiaIndexAverage}/10:
              <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
            </>
            // )}
          )}
        </StyledResultCard>
      </StyledList>
    </>
  );
}
