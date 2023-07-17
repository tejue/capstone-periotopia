import PersonalAnswer from "../PersonalAnswer";
import PeriotopiaInfo from "../PeriotopiaInfo";
import PeriotopiaIndex from "../PeriotopiaIndex";
import NavButton from "../NavButton";

export default function Answer({
  year,
  today,
  life,
  periotopiaInfoText,
  periotopiaIndex,
  onPrevPage,
  nextPage,
  unit,
  additionalYear,
  additionalToday,
  additionalLife,
  personalAnswerText,
}) {
  const acceptableValue = year >= 0 && today >= 0 && life >= 0;

  return (
    <>
      {/* {acceptableValue ? ( */}
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
          <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />
        )}
      </>
      {/* // ) : (
      //   <p>
      //     Es scheint etwas schief gelaufen zu sein. Bitte gehe zurück und fülle
      //     die Fragen richtig und vollständig aus
      //   </p>
      // )} */}
      <NavButton onPrevPage={onPrevPage} nextPage={nextPage} />
    </>
  );
}
