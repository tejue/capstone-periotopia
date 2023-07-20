import FormGeneral from "@/components/FormGeneral/index";
import Answer from "@/components/Answer";
import { useState } from "react";
import Link from "next/link";
import NavButton from "@/components/NavButton";

export default function GeneralInfoPage({
  handleGeneralInfo,
  generalInfo,
  formatNumber,
  menstruationDaysPerYear,
}) {
  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  const menstruationDaysTillNow = Math.round(
    age - firstMenstruation < 39
      ? menstruationDaysPerYear * (age - firstMenstruation)
      : menstruationDaysPerYear * 39
  );

  const menstruationDaysInLife = Math.round(menstruationDaysPerYear * 39);

  const [currentValue, setCurrentValue] = useState({
    age: "",
    firstMenstruation: "",
    cyclusLength: "",
    menstruationLength: "",
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

  return (
    <>
      <h2>Periotopia</h2>
      {/* {!submittedForm && ( */}
      <FormGeneral
        handleGeneralInfo={handleGeneralInfo}
        handleSubmittedForm={handleSubmittedForm}
        currentValue={currentValue}
        updateCurrentValue={updateCurrentValue}
      />
      {/* )} */}
      {/* {submittedForm && ( */}
      <Answer
        personalAnswerText="Du menstruierst"
        unit="Tage"
        year={formatNumber(menstruationDaysPerYear)}
        today={formatNumber(menstruationDaysTillNow)}
        life={formatNumber(menstruationDaysInLife)}
        periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..."
        //onPrevPage={handlePrevPage}
        // nextPage="/financials"
      />
      <Link href="/financials">hier</Link>
      {/* <NavButton onPrevPage={handlePrevPage} nextPage="/financials" /> */}
      {/* )} */}
    </>
  );
}
