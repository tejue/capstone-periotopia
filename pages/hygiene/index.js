import { useState } from "react";
import FormHygiene from "@/components/FormHygiene";
import Answer from "@/components/Answer";
import NavButton from "@/components/NavButton";

export default function HygienePage({}) {
  return (
    <>
      <h2>Periotopia</h2>
      {/* {!submittedForm &&  */}
      <FormHygiene />
      {/* }
       {submittedForm && ( */}
      <>
        {/* <Answer
            personalAnswerText="Für deine Menstruationsprodukte zahlst du"
            unit="Euro"
            year={formatNumber(costsPerYear)}
            today={formatNumber(costsTillToday)}
            life={formatNumber(costsInLife)}
            additionalYear={`davon sind ${formatNumber(
              taxesPerYear
            )} Euro Steuern`}
            additionalToday={`davon sind ${formatNumber(
              taxesTillToday
            )} Euro Steuern`}
            additionalLife={`davon sind ${formatNumber(
              taxesInLife
            )} Euro Steuern`}
            periotopiaInfoText="In Periotopia wären
      Menstruationsprodukte frei zugänglich. Schottland ist das bisher einzige
      Land weltweit, in dem Menstruationsartikel in öffentlichen Gebäuden per
      Gesetz kostenlos bereitgestellt werden müssen. In Deutschland sind es vor
      allem manche Universitäten, die kostenlose Produkte zur Verfügung stellen.
      Nur in wenigen Ländern sind Menstruationsprodukte von der Steuer befreit.
      In Deutschland ist sie seit 2020 zumindest reduziert"
            periotopiaIndex={periotopiaIndex}
          />
          <NavButton onPrevPage={handlePrevPage} onNextPage={handleNextPage} /> */}
      </>
      {/* )} */}
    </>
  );
}
