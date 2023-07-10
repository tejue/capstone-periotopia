import { useState } from "react";
import PersonalAnswer from "@/components/PersonalAnswer/index";
import PeriotopiaInfo from "@/components/PeriotopiaInfo/index";
import FormGeneral from "@/components/FormGeneral/index";
import FormFinancials from "@/components/FormFinancials";

export default function HomePage() {
  const [age, setAge] = useState("");
  const [firstMenstruation, setFirstMenstruation] = useState("");
  const [cyclusLength, setCyclusLength] = useState("");
  const [menstruationLength, setMenstruationLength] = useState("");
  const [menstruationDaysPerYear, setMenstruationDaysPerYear] = useState("");
  const [menstruationDaysTillNow, setMenstruationDaysTillNow] = useState("");
  const [menstruationDaysInLife, setMenstruationDaysInLife] = useState("");

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleFirstMenstruationChange(event) {
    setFirstMenstruation(event.target.value);
  }

  function handleCyclusLengthChange(event) {
    setCyclusLength(event.target.value);
  }

  function handleMenstruationLengthChange(event) {
    setMenstruationLength(event.target.value);
  }

  function handleMenstruationDaysPerYear(calculatedMenstruationDaysPerYear) {
    setMenstruationDaysPerYear(calculatedMenstruationDaysPerYear);
  }

  function handleMenstruationDaysTillNow(calculatedMenstruationDaysTillNow) {
    setMenstruationDaysTillNow(calculatedMenstruationDaysTillNow);
  }

  function handleMenstruationDaysInLife(calculatedMenstruationDaysInLIfe) {
    setMenstruationDaysInLife(calculatedMenstruationDaysInLIfe);
  }

  const [product, setProduct] = useState("");
  function handleProductChoice(event) {
    setProduct(event.target.value);
  }

  return (
    <>
      <h1>Periotopia</h1>
      <FormGeneral
        onAgeChange={handleAgeChange}
        onFirstMenstruationChange={handleFirstMenstruationChange}
        onCyclusLengthChange={handleCyclusLengthChange}
        onMenstruationLengthChange={handleMenstruationLengthChange}
        age={age}
        firstMenstruation={firstMenstruation}
        cyclusLength={cyclusLength}
        menstruationLength={menstruationLength}
        handleMenstruationDaysPerYear={handleMenstruationDaysPerYear}
        handleMenstruationDaysTillNow={handleMenstruationDaysTillNow}
        handleMenstruationDaysInLife={handleMenstruationDaysInLife}
      ></FormGeneral>
      <PersonalAnswer
        personalAnswerText="Du menstruierst"
        unit="Tage"
        year={menstruationDaysPerYear}
        today={menstruationDaysTillNow}
        life={menstruationDaysInLife}
      />
      <PeriotopiaInfo periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..." />
      <FormFinancials onProductChoice={handleProductChoice} />
      <PersonalAnswer
        personalAnswerText="Für deine Menstruationsprodukte zahlst du"
        unit="Euro"
        year
        today
        life
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
