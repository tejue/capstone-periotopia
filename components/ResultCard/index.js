import PeriotopiaIndex from "../PeriotopiaIndex";
import FormField from "../FormField";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import Icon from "@mdi/react";
import { mdiChevronRightCircle } from "@mdi/js";
import { mdiAlphaXCircle } from "@mdi/js";
import { mdiBrush } from "@mdi/js";
import { mdiBrushOff } from "@mdi/js";
import IconSVG from "../IconSVG";

import "react-confirm-alert/src/react-confirm-alert.css";
import {
  StyledList,
  StyledResultCard,
  StyledCardHeading,
  StyledIcon,
  StyledCardIcon,
  StyledCardHeaderWrapper,
  CardParagraph,
  CardParagraphWrapper,
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
          <StyledIcon path={mdiAlphaXCircle} size={1} onClick={handleDelete} />
          <StyledIcon
            path={mdiChevronRightCircle}
            size={1}
            onClick={handleToggle}
            rotate={isResultVisible ? 90 : 0}
          />
          <StyledCardHeaderWrapper>
            {editIndexTitle ? (
              <FormField
                type="text"
                value={editedIndexTitle}
                onChange={(event) => setEditedIndexTitle(event.target.value)}
              />
            ) : (
              <StyledCardHeading>{indexTitleID}</StyledCardHeading>
            )}{" "}
            {editIndexTitle ? (
              <Icon
                path={mdiBrushOff}
                size={1}
                onClick={handleIndexTitleEditToggle}
              />
            ) : (
              <Icon
                path={mdiBrush}
                size={1}
                onClick={handleIndexTitleEditToggle}
              />
            )}
          </StyledCardHeaderWrapper>
          {isResultVisible && (
            //  {/* {costsPerYear >= 0 && ( */}
            <>
              <CardParagraphWrapper>
                <IconSVG icon="water" size={28} />
                <CardParagraph>
                  Du hast deine Menstruation an {menstruationDaysPerYearID}{" "}
                  Tagen im Jahr.
                </CardParagraph>
              </CardParagraphWrapper>
              <CardParagraphWrapper>
                <IconSVG icon="piggy" size={78} />
                <CardParagraph>
                  Für deine Menstruationsprodukte zahlst du{" "}
                  {formatNumber(costsPerYearID)} Euro pro Jahr mit{" "}
                  {taxAmountID[financialsTaxAmountID]}. Für den Faktor Geld ist
                  dein Periotopia-Index {numberPeriotopiaIndexFinancialsID}
                  /10.
                </CardParagraph>
              </CardParagraphWrapper>
              <CardParagraphWrapper>
                <IconSVG icon="paper" size={142} />
                <CardParagraph>
                  {accessID === "yes"
                    ? `Du hast Zugang zu einer sauberen und sicheren Sanitäranlage um dein Menstruationsprodukt zu wechseln. Für den Hin- und Rückweg zu einer Sanitäranlage brauchst du bis zu ${formatTime(
                        timePerYearID
                      )} im Jahr.`
                    : `Du hast keinen Zugang zu einer sauberen und sicheren Sanitäranlage um deine Menstruationsprodukte zu wechseln oder brauchst für den Hin- und Rückweg mindestens ${formatTime(
                        timePerYearID
                      )} im Jahr.`}{" "}
                  Für den Faktor Hygiene ist dein Periotopia-Index{" "}
                  {numberperiotopiaIndexHygieneID}/10.
                </CardParagraph>
              </CardParagraphWrapper>
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
