import { useState } from "react";
import PersonalAnswer from "@/components/PersonalAnswer/index";
import PeriotopiaInfo from "@/components/PeriotopiaInfo/index";
import FormGeneral from "@/components/FormGeneral/index";
import FormFinancials from "@/components/FormFinancials";
import PeriotopiaIndex from "@/components/PeriotopiaIndex";

export default function HomePage() {
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
    menstruationDaysPerYear * (age - firstMenstruation)
  );

  const menstruationDaysInLife = Math.round(menstruationDaysPerYear * 38);

  const [financials, setFinancials] = useState({
    product: "",
    packageCosts: "",
    taxReduction: "",
    taxes: "",
    packageContent: "",
    changeProduct: "",
  });

  const {
    product,
    packageCosts,
    taxReduction,
    taxes,
    packageContent,
    changeProduct,
  } = financials;

  // function handleFinancials(event) {
  //   const { name, value } = event.target;
  //   setFinancials((prevFinancials) => ({
  //     ...prevFinancials,
  //     [name]: value,
  //   }));
  // }

  function handleFinancials(data) {
    setFinancials(() => ({
      ...data,
    }));
  }

  const costsPerCyclus = Math.round(
    (packageCosts / packageContent) * (changeProduct * menstruationLength)
  );

  const costsPerYear = Math.round(costsPerCyclus * menstruationDaysPerYear);
  const taxesPerYear = Math.round(costsPerYear * (taxes / 100));

  const costsTillToday = Math.round(costsPerYear * (age - firstMenstruation));
  const taxesTillToday = Math.round(costsTillToday * (taxes / 100));

  const costsInLife = Math.round(costsPerYear * 38);
  const taxesInLife = Math.round(costsInLife * (taxes / 100));

  function periotopiaIndexFinancials() {
    if (packageCosts === "0") {
      return "100%";
    } else if (packageCosts > "0" && taxReduction === "keine Steuer") {
      return "66%";
    } else if (packageCosts > "0" && taxReduction === "Teilsteuer") {
      return "33%";
    } else {
      return "0%";
    }
  }

  function formatNumber(number) {
    return number != null ? number.toLocaleString("de-DE") : "";
  }

  return (
    <>
      <h1>Periotopia</h1>
      <FormGeneral
        generalInfo={generalInfo}
        handleGeneralInfo={handleGeneralInfo}
      />
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

      <FormFinancials
        financials={financials}
        handleFinancials={handleFinancials}
      />
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
