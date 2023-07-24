import { useState } from "react";
import FormFinancials from "@/components/FormFinancials";
import Answer from "@/components/Answer";
import NavButton from "@/components/NavButton";
import { useRouter } from "next/router";

export default function FinancialsPage({
  financials,
  handleFinancials,
  costsPerYear,
  generalInfo,
  periotopiaIndexFinancials,
  formatNumber,
}) {
  const router = useRouter();

  const [currentValue, setCurrentValue] = useState({
    product: "",
    packageCosts: "",
    taxAmount: "",
    taxes: "",
    packageContent: "",
    changeProduct: "",
  });
  function updateCurrentValue(newValue) {
    setCurrentValue(newValue);
  }

  const [submittedForm, setSubmittedForm] = useState(false);

  function handleSubmittedForm(value) {
    setSubmittedForm(value);
  }

  function handlePrevPage() {
    setSubmittedForm(false);
  }

  function handleNextPage() {
    router.push("/hygiene");
  }

  const taxesPerYear = costsPerYear * (financials.taxes / 100);

  const costsTillToday =
    costsPerYear * (generalInfo.age - generalInfo.firstMenstruation);
  const taxesTillToday = costsTillToday * (financials.taxes / 100);

  const costsInLife = costsPerYear * 39;
  const taxesInLife = costsInLife * (financials.taxes / 100);

  const acceptableValue =
    costsPerYear >= 0 && costsTillToday >= 0 && costsInLife >= 0;

  return (
    <>
      <h1>Geld</h1>
      {!submittedForm && (
        <FormFinancials
          handleFinancials={handleFinancials}
          handleSubmittedForm={handleSubmittedForm}
          currentValue={currentValue}
          updateCurrentValue={updateCurrentValue}
        />
      )}
      {submittedForm && (
        <>
          <Answer
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
            periotopiaIndex={periotopiaIndexFinancials}
          />
          <NavButton onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
        </>
      )}
    </>
  );
}
