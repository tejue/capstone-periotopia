import PersonalAnswer from "../PersonalAnswer";
import PeriotopiaInfo from "../PeriotopiaInfo";
import PeriotopiaIndex from "../PeriotopiaIndex";
import NavButton from "../NavButton";
import Link from "next/link";

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
      {periotopiaIndex && <PeriotopiaIndex periotopiaIndex={periotopiaIndex} />}
      {/* <NavButton onPrevPage={onPrevPage} nextPage={nextPage} /> */}
    </>
  );
}
