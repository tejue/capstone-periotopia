import PersonalAnswer from "../PersonalAnswer";
import PeriotopiaInfo from "../PeriotopiaInfo";
import PeriotopiaIndex from "../PeriotopiaIndex";

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
        <div>
          <h2>Dein Periotopia-Index</h2>
          <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
        </div>
      )}
    </>
  );
}
