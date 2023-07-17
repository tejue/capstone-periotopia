import PersonalAnswer from "../PersonalAnswer";
import PeriotopiaInfo from "../PeriotopiaInfo";
import PeriotopiaIndex from "../PeriotopiaIndex";

export default function Answer({
  year,
  today,
  life,
  periotopiaInfoText,
  periotopiaIndexFinancials,
}) {
  const acceptableValue = year >= 0 && today >= 0 && life >= 0;

  return acceptableValue ? (
    <>
      <PersonalAnswer year={year} today={today} life={life} />
      <PeriotopiaInfo periotopiaInfoText={periotopiaInfoText} />
      {periotopiaIndexFinancials && (
        <PeriotopiaIndex
          periotopiaIndexFinancials={periotopiaIndexFinancials}
        />
      )}
    </>
  ) : null;
}
