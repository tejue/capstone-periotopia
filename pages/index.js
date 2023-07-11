import { useState } from "react";
import PersonalAnswer from "@/components/PersonalAnswer/index";
import PeriotopiaInfo from "@/components/PeriotopiaInfo/index";
import FormGeneral from "@/components/FormGeneral/index";
import FormFinancials from "@/components/FormFinancials";

export default function HomePage() {
  const [generalInfo, setGeneralInfo] = useState({
    age: "39",
    firstMenstruation: "13",
    cyclusLength: "28",
    menstruationLength: "5",
  });

  const handleGeneralInfo = (event) => {
    const { name, value } = event.target;
    setGeneralInfo((prevGeneralInfo) => ({
      ...prevGeneralInfo,
      [name]: value,
    }));
  };

  const [menstruationDaysPerYear, setMenstruationDaysPerYear] = useState("");
  function handleMenstruationDaysPerYear(calculatedMenstruationDaysPerYear) {
    setMenstruationDaysPerYear(calculatedMenstruationDaysPerYear);
  }

  const [menstruationDaysTillNow, setMenstruationDaysTillNow] = useState("");
  function handleMenstruationDaysTillNow(calculatedMenstruationDaysTillNow) {
    setMenstruationDaysTillNow(calculatedMenstruationDaysTillNow);
  }

  const [menstruationDaysInLife, setMenstruationDaysInLife] = useState("");
  function handleMenstruationDaysInLife(calculatedMenstruationDaysInLIfe) {
    setMenstruationDaysInLife(calculatedMenstruationDaysInLIfe);
  }

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

  // const [costsPerCyclus, setCostsPerCyclus] = useState("");
  // function handleCostsPerCyclus(calculatedCostsPerCyclus) {
  //   setCostsPerCyclus(calculatedCostsPerCyclus);
  // }

  const [costsPerYear, setCostsPerYear] = useState("");
  function handleCostsPerYear(calculatedCostPerYear) {
    setCostsPerYear(calculatedCostPerYear);
  }

  const calulatedTaxesPerYear = costsPerYear * (financials.taxes / 100);

  const [costsTillToday, setCostsTillToday] = useState("");
  function handleCostsTillToday(calculatedCostTillToday) {
    setCostsTillToday(calculatedCostTillToday);
  }
  const calulatedTaxesTillToday = costsTillToday * (financials.taxes / 100);

  const [costsInLife, setCostsInLife] = useState("");
  function handleCostsInLife(calculatedCostinLife) {
    setCostsInLife(calculatedCostinLife);
  }
  const calulatedTaxesInLife = costsInLife * (financials.taxes / 100);

  return (
    <>
      <h1>Periotopia</h1>
      <FormGeneral
        generalInfo={generalInfo}
        handleGeneralInfo={handleGeneralInfo}
        handleMenstruationDaysPerYear={handleMenstruationDaysPerYear}
        handleMenstruationDaysTillNow={handleMenstruationDaysTillNow}
        handleMenstruationDaysInLife={handleMenstruationDaysInLife}
      />
      <PersonalAnswer
        personalAnswerText="Du menstruierst"
        unit="Tage"
        year={menstruationDaysPerYear}
        today={menstruationDaysTillNow}
        life={menstruationDaysInLife}
      />
      <PeriotopiaInfo periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..." />
      <FormFinancials
        financials={financials}
        handleFinancials={handleFinancials}
        handleCostsPerYear={handleCostsPerYear}
        handleCostsTillToday={handleCostsTillToday}
        handleCostsInLife={handleCostsInLife}
        //handleCostsPerCyclus={handleCostsPerCyclus}
        handleGeneralInfo={handleGeneralInfo}
        generalInfo={generalInfo}
        menstruationDaysPerYear={menstruationDaysPerYear}
      />
      <PersonalAnswer
        personalAnswerText="Für deine Menstruationsprodukte zahlst du"
        unit="Euro"
        year={costsPerYear}
        today={costsTillToday}
        life={costsInLife}
        additionalYear={`davon sind ${calulatedTaxesPerYear} Euro Steuern`}
        additionalToday={`davon sind ${calulatedTaxesTillToday} Euro Steuern`}
        additionalLife={`davon sind ${calulatedTaxesInLife} Euro Steuern`}
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
    </>
  );
}
