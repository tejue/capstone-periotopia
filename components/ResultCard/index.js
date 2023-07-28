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
  CardTitelWrapper,
  CardParagraph,
  CardParagraphWrapper,
  IconWrapper,
  IconWrapOpenClose,
  IconWrapDelete,
  CardEnding,
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
              color={`var(--primary-highlight-color)`}
              size={33}
            />
          </IconWrapDelete>
          <IconWrapOpenClose rotate={isResultVisible ? 90 : 0}>
            <IconSVG
              icon="circle"
              color={`var(--primary-highlight-color)`}
              onClick={handleToggle}
              size={33}
            />
          </IconWrapOpenClose>
          <CardTitelWrapper>
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
                color={`var(--primary-highlight-color)`}
                onClick={handleIndexTitleEditToggle}
                size={30}
              />
            ) : (
              <IconSVG
                icon="brush"
                color={`var(--primary-highlight-color)`}
                onClick={handleIndexTitleEditToggle}
                size={30}
              />
            )}
          </CardTitelWrapper>
          {isResultVisible && (
            //  {/* {costsPerYear >= 0 && ( */}
            <>
              <CardParagraphWrapper>
                <IconWrapper>
                  <IconSVG
                    icon="water"
                    color={`var(--tertier-highlight-color)`}
                    size={30}
                  />
                </IconWrapper>
                <CardParagraph>
                  Du hast deine Menstruation an {menstruationDaysPerYearID}{" "}
                  Tagen im Jahr.
                </CardParagraph>
              </CardParagraphWrapper>
              <CardParagraphWrapper>
                <IconWrapper>
                  <IconSVG
                    icon="money"
                    color={`var(--tertier-highlight-color)`}
                    size={30}
                  />
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
                  <IconSVG
                    icon="wash"
                    color={`var(--tertier-highlight-color)`}
                    size={30}
                  />
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
              <CardEnding>
                {" "}
                Dein durchschnittlicher Periotopia-Index:{" "}
                {periotopiaIndexAverage}/10{" "}
              </CardEnding>
              <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
            </>
            // )}
          )}
        </StyledResultCard>
      </StyledList>
    </>
  );
}
