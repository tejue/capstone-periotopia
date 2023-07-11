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

  const handleGeneralInfo = (event) => {
    const { name, value } = event.target;
    setGeneralInfo((prevGeneralInfo) => ({
      ...prevGeneralInfo,
      [name]: value,
    }));
  };

  const menstruationDaysPerYear = Math.round(
    (365 / generalInfo.cyclusLength) * generalInfo.menstruationLength
  );

  const menstruationDaysTillNow = Math.round(
    menstruationDaysPerYear * (generalInfo.age - generalInfo.firstMenstruation)
  );

  const menstruationDaysInLife = Math.round(menstruationDaysPerYear * 38);

  const [financials, setFinancials] = useState({
    product: "",
    packageCosts: "",
    taxReduction: "",
    taxes: "",
    packageContent: "",
    changeProdukt: "",
  });

  const handleFinancials = (event) => {
    const { name, value } = event.target;
    setFinancials((prevFinancials) => ({
      ...prevFinancials,
      [name]: value,
    }));
  };

  const costsPerCyclus = Math.round(
    (financials.packageCosts / financials.packageContent) *
      financials.changeProdukt *
      generalInfo.menstruationLength
  );

  const costsPerYear = Math.round(costsPerCyclus * menstruationDaysPerYear);
  const taxesPerYear = Math.round(costsPerYear * (financials.taxes / 100));

  const costsTillToday = Math.round(
    costsPerYear * (generalInfo.age - generalInfo.firstMenstruation)
  );
  const taxesTillToday = Math.round(costsTillToday * (financials.taxes / 100));

  const costsInLife = Math.round(costsPerYear * 38);
  const taxesInLife = Math.round(costsInLife * (financials.taxes / 100));

  function periotopiaIndexFinancials() {
    if (financials.packageCosts === 0) {
      return "100%";
    } else if (
      financials.packageCosts > 0 &&
      financials.taxReduction === "keine Steuer"
    ) {
      return "66%";
    } else if (
      financials.packageCosts > 0 &&
      financials.taxReduction === "Teilsteuer"
    ) {
      return "33%";
    } else {
      return "0%";
    }
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
        year={menstruationDaysPerYear ?? ""}
        today={menstruationDaysTillNow || ""}
        life={menstruationDaysInLife || ""}
      />
      <PeriotopiaInfo periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..." />
      <FormFinancials
        financials={financials}
        handleFinancials={handleFinancials}
      />
      <PersonalAnswer
        personalAnswerText="Für deine Menstruationsprodukte zahlst du"
        unit="Euro"
        year={costsPerYear || ""}
        today={costsTillToday || ""}
        life={costsInLife || ""}
        additionalYear={`davon sind ${taxesPerYear || ""} Euro Steuern`}
        additionalToday={`davon sind ${taxesTillToday || ""} Euro Steuern`}
        additionalLife={`davon sind ${taxesInLife || ""} Euro Steuern`}
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
