import { useState } from "react";
import PersonalAnswer from "@/components/PersonalAnswer/index";
import PeriotopiaInfo from "@/components/PeriotopiaInfo/index";
import FormGeneral from "@/components/FormGeneral/index";
import FormFinancials from "@/components/FormFinancials";
import PeriotopiaIndex from "@/components/PeriotopiaIndex";

export default function HomePage() {
  //Calculation PersonalAnswer GeneralInfo
  const [generalInfo, setGeneralInfo] = useState({
    age: "",
    firstMenstruation: "",
    cyclusLength: "",
    menstruationLength: "",
  });

  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  function handleGeneralInfo(data) {
    setGeneralInfo({
      ...data,
    });
  }

  const menstruationDaysPerYear = Math.round(
    (365 / cyclusLength) * menstruationLength
  );

  const menstruationDaysTillNow = Math.round(
    age - firstMenstruation < 39
      ? menstruationDaysPerYear * (age - firstMenstruation)
      : menstruationDaysPerYear * 39
  );

  const menstruationDaysInLife = Math.round(menstruationDaysPerYear * 39);

  //Calculation PersonalAnswer Financials
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
    } else return 0;
  }
  const costsPerYear = costsPerYearCalc();
  const taxesPerYear = costsPerYear * (taxes / 100);

  const costsTillToday = costsPerYear * (age - firstMenstruation);
  const taxesTillToday = costsTillToday * (taxes / 100);

  const costsInLife = costsPerYear * 38;
  const taxesInLife = costsInLife * (taxes / 100);

  function formatNumber(number) {
    if (number == null || number < 0) {
      return "";
    } else if (Math.abs(number) % 1 !== 0) {
      return number.toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return Math.trunc(number).toLocaleString("de-DE");
  }

  //Calculation Periotopia-Index
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
      <h1>Periotopia</h1>
      <FormGeneral handleGeneralInfo={handleGeneralInfo} />
      <PersonalAnswer
        personalAnswerText="Du menstruierst"
        unit="Tage"
        year={
          menstruationDaysPerYear ? formatNumber(menstruationDaysPerYear) : ""
        }
        today={
          menstruationDaysPerYear ? formatNumber(menstruationDaysTillNow) : ""
        }
        life={
          menstruationDaysInLife ? formatNumber(menstruationDaysInLife) : ""
        }
      />
      <PeriotopiaInfo periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..." />

      <FormFinancials handleFinancials={handleFinancials} />
      <PersonalAnswer
        personalAnswerText="Für deine Menstruationsprodukte zahlst du"
        unit="Euro"
        year={costsPerYear ? formatNumber(costsPerYear) : ""}
        today={costsTillToday ? formatNumber(costsTillToday) : ""}
        life={costsInLife ? formatNumber(costsInLife) : ""}
        additionalYear={`davon sind ${
          taxesPerYear ? formatNumber(taxesPerYear) : ""
        } Euro Steuern`}
        additionalToday={`davon sind ${
          taxesTillToday ? formatNumber(taxesTillToday) : ""
        } Euro Steuern`}
        additionalLife={`davon sind ${
          taxesInLife ? formatNumber(taxesInLife) : ""
        } Euro Steuern`}
      />
      <PeriotopiaInfo
        periotopiaInfoText="In Periotopia wären
      Menstruationsprodukte frei zugänglich. Schottland ist das bisher einzige
      Land weltweit, in dem Menstruationsartikel in öffentlichen Gebäuden per
      Gesetz kostenlos bereitgestellt werden müssen. In Deutschland sind es vor
      allem manche Universitäten, die kostenlose Produkte zur Verfügung stellen.
      Nur in wenigen Ländern sind Menstruationsprodukte von der Steuer befreit.
      In Deutschland ist sie seit 2020 zumindest reduziert"
      />
      <PeriotopiaIndex
        periotopiaIndexFinancials={periotopiaIndexFinancials()}
      />
    </>
  );
}
