import PersonalAnswer from "../PersonalAnswer";
import PeriotopiaInfo from "../PeriotopiaInfo";
import PeriotopiaIndex from "../PeriotopiaIndex";
import NavButton from "../NavButton";

export default function Answer({
  year,
  today,
  life,
  periotopiaInfoText,
  periotopiaIndexFinancials,
  onClickQuestion,
  onClickNextQuestion,
  unit,
}) {
  const acceptableValue = year >= 0 && today >= 0 && life >= 0;

  return (
    <>
      {acceptableValue ? (
        <>
          <PersonalAnswer year={year} today={today} life={life} unit={unit} />
          <PeriotopiaInfo periotopiaInfoText={periotopiaInfoText} />
          {periotopiaIndexFinancials && (
            <PeriotopiaIndex
              periotopiaIndexFinancials={periotopiaIndexFinancials}
            />
          )}
        </>
      ) : (
        <p>
          Es scheint etwas schief gelaufen zu sein. Bitte gehe zurück und fülle
          die Fragen richtig und vollständig aus
        </p>
      )}

      <NavButton
        onClickQuestion={onClickQuestion}
        onClickNextQuestion={onClickNextQuestion}
      />
    </>
  );
}
