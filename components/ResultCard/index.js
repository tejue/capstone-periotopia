import PeriotopiaIndex from "../PeriotopiaIndex";
import FormField from "../FormField";
import IconSVG from "../IconSVG";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  StyledList,
  StyledResultCard,
  CardHeading,
  CardHeaderWrapper,
  CardParagraph,
  CardParagraphWrapper,
  IconWrapper,
  IconWrapOpenClose,
  IconWrapDelete,
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

  function handleIndexTitleEditToggle() {
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
      <StyledList>
        <StyledResultCard>
          <IconWrapDelete>
            <IconSVG
              icon="x"
              onClick={handleDelete}
              color={`var(--secondary-highlight-color)`}
            />
          </IconWrapDelete>
          <IconWrapOpenClose>
            <IconSVG
              icon="circle"
              color={`var(--secondary-highlight-color)`}
              onClick={handleToggle}
              rotate={isResultVisible ? 90 : 0}
            />
          </IconWrapOpenClose>
          <CardHeaderWrapper>
            {editIndexTitle ? (
              <FormField
                type="text"
                value={editedIndexTitle}
                onChange={(event) => setEditedIndexTitle(event.target.value)}
              />
            ) : (
              <CardHeading>{indexTitleID}</CardHeading>
            )}{" "}
            {editIndexTitle ? (
              <IconSVG
                icon="brushoff"
                color={`var(--secondary-highlight-color)`}
                onClick={handleIndexTitleEditToggle}
              />
            ) : (
              <IconSVG
                icon="brush"
                color={`var(--secondary-highlight-color)`}
                onClick={handleIndexTitleEditToggle}
              />
            )}
          </CardHeaderWrapper>
          {isResultVisible && (
            //  {/* {costsPerYear >= 0 && ( */}
            <>
              <CardParagraphWrapper>
                <IconWrapper>
                  <IconSVG icon="water" />
                </IconWrapper>
                <CardParagraph>
                  Du hast deine Menstruation an {menstruationDaysPerYearID}{" "}
                  Tagen im Jahr.
                </CardParagraph>
              </CardParagraphWrapper>
              <CardParagraphWrapper>
                <IconWrapper>
                  <IconSVG icon="piggy" />
                </IconWrapper>
                <CardParagraph>
                  Für deine Menstruationsprodukte zahlst du{" "}
                  {formatNumber(costsPerYearID)} Euro pro Jahr mit{" "}
                  {taxAmountID[financialsTaxAmountID]}. Für den Faktor Geld ist
                  dein Periotopia-Index {numberPeriotopiaIndexFinancialsID}
                  /10.
                </CardParagraph>
              </CardParagraphWrapper>
              <CardParagraphWrapper>
                <IconWrapper>
                  <IconSVG icon="paper" />
                </IconWrapper>
                <CardParagraph>
                  {accessID === "yes"
                    ? `Du hast Zugang zu einer sauberen und sicheren Sanitäranlage um dein Menstruationsprodukt zu wechseln. Für den Hin- und Rückweg brauchst du bis zu ${formatTime(
                        timePerYearID
                      )} im Jahr.`
                    : `Du hast keinen Zugang zu einer sauberen und sicheren Sanitäranlage um deine Menstruationsprodukte zu wechseln oder brauchst für den Hin- und Rückweg mindestens ${formatTime(
                        timePerYearID
                      )} im Jahr.`}{" "}
                  Für den Faktor Hygiene ist dein Periotopia-Index{" "}
                  {numberperiotopiaIndexHygieneID}/10.
                </CardParagraph>
              </CardParagraphWrapper>
              <CardHeading>
                {" "}
                Dein durchschnittlicher Periotopia-Index ist:{" "}
                {periotopiaIndexAverage}/10
              </CardHeading>
              <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
            </>
            // )}
          )}
        </StyledResultCard>
      </StyledList>
    </>
  );
}
