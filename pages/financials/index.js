import { useState } from "react";
import FormFinancials from "@/components/FormFinancials";
import Answer from "@/components/Answer";
import Link from "next/link";
import NavButton from "@/components/NavButton";
import { useRouter } from "next/router";

export default function FinancialsPage({
  generalInfo,
  financials,
  handleFinancials,
  formatNumber,
  menstruationDaysPerYear,
  costsPerYear,
  periotopiaIndex,
  handleAddResult,
  newResult,
}) {
  const router = useRouter();

  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  const {
    product,
    packageCosts,
    taxAmount,
    taxes,
    packageContent,
    changeProduct,
  } = financials;

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
    handleAddResult(newResult);
    router.push("/hygiene");
  }

  const taxesPerYear = costsPerYear * (taxes / 100);

  const costsTillToday = costsPerYear * (age - firstMenstruation);
  const taxesTillToday = costsTillToday * (taxes / 100);

  const costsInLife = costsPerYear * 39;
  const taxesInLife = costsInLife * (taxes / 100);

  const acceptableValue =
    costsPerYear >= 0 && costsTillToday >= 0 && costsInLife >= 0;

  return (
    <>
      <h2>Periotopia</h2>
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
            periotopiaIndex={periotopiaIndex}
          />
          <NavButton onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
        </>
      )}
    </>
  );
}
