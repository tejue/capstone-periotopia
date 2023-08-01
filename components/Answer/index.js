import PersonalAnswer from "../PersonalAnswer";
import PeriotopiaInfo from "../PeriotopiaInfo";
import IndexBar from "../IndexBar";
import { StyledAnswerIndex, IndexWrapper } from "./styles";

export default function Answer({
  year,
  today,
  life,
  periotopiaInfoText,
  periotopiaIndex,
  unit,
  additionalYear,
  additionalToday,
  additionalLife,
  personalAnswerText,
}) {
  const numberPeriotopiaIndex =
    periotopiaIndex !== undefined
      ? Math.floor(parseInt(periotopiaIndex.replace("%", "")) / 10)
      : undefined;

  return (
    <>
      <PersonalAnswer
        personalAnswerText={personalAnswerText}
        year={year}
        today={today}
        life={life}
        unit={unit}
        {...(additionalYear !== undefined && { additionalYear })}
        {...(additionalToday !== undefined && { additionalToday })}
        {...(additionalLife !== undefined && { additionalLife })}
      />
      <PeriotopiaInfo periotopiaInfoText={periotopiaInfoText} />
      {periotopiaIndex && (
        <IndexWrapper>
          <StyledAnswerIndex>
            Dein Periotopia-Index ist {numberPeriotopiaIndex}/10
          </StyledAnswerIndex>
          <IndexBar periotopiaIndex={periotopiaIndex} />
        </IndexWrapper>
      )}
    </>
  );
}
