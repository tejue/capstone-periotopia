import { useState } from "react";
import FormFinancials from "@/components/FormFinancials";

export default function FinancialsPage({
  generalInfo,
  formatNumber,
  menstruationDaysPerYear,
}) {
  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  const [financials, setFinancials] = useState({
    product: "",
    packageCosts: "",
    taxAmount: "",
    taxes: "",
    packageContent: "",
    changeProduct: "",
  });

  const {
    product,
    packageCosts,
    taxAmount,
    taxes,
    packageContent,
    changeProduct,
  } = financials;

  function handleFinancials(data) {
    setFinancials(data);
  }

  function costsPerYearCalc() {
    if (product === "tampon" || product === "pad") {
      return (
        (packageCosts / packageContent) *
        (changeProduct * menstruationLength) *
        menstruationDaysPerYear
      );
    } else if (product === "cup" || product === "disc") {
      return packageCosts / 5 / (packageContent / packageContent);
    } else if (product === "schlueppi") {
      return (
        (packageCosts / packageContent / 2) *
        (changeProduct * menstruationLength)
      );
    } else return NaN;
  }

  const costsPerYear = costsPerYearCalc();
  const taxesPerYear = costsPerYear * (taxes / 100);

  const costsTillToday = costsPerYear * (age - firstMenstruation);
  const taxesTillToday = costsTillToday * (taxes / 100);

  const costsInLife = costsPerYear * 39;
  const taxesInLife = costsInLife * (taxes / 100);

  function periotopiaIndexFinancials() {
    if (packageCosts === "0") {
      return "100%";
    } else if (packageCosts > "0" && taxAmount === "none") {
      return "66%";
    } else if (packageCosts > "0" && taxAmount === "partial") {
      return "33%";
    } else {
      return "0%";
    }
  }

  return (
    <>
      <h2>Periotopia</h2>
      <FormFinancials
        handleFinancials={handleFinancials}
        personalAnswerText="Für deine Menstruationsprodukte zahlst du"
        unit="Euro"
        year={formatNumber(costsPerYear)}
        today={formatNumber(costsTillToday)}
        life={formatNumber(costsInLife)}
        additionalYear={`davon sind ${formatNumber(taxesPerYear)} Euro Steuern`}
        additionalToday={`davon sind ${formatNumber(
          taxesTillToday
        )} Euro Steuern`}
        additionalLife={`davon sind ${formatNumber(taxesInLife)} Euro Steuern`}
        periotopiaInfoText="In Periotopia wären
      Menstruationsprodukte frei zugänglich. Schottland ist das bisher einzige
      Land weltweit, in dem Menstruationsartikel in öffentlichen Gebäuden per
      Gesetz kostenlos bereitgestellt werden müssen. In Deutschland sind es vor
      allem manche Universitäten, die kostenlose Produkte zur Verfügung stellen.
      Nur in wenigen Ländern sind Menstruationsprodukte von der Steuer befreit.
      In Deutschland ist sie seit 2020 zumindest reduziert"
        periotopiaIndexFinancials={periotopiaIndexFinancials()}
      />
    </>
  );
}
