import { useState } from "react";
import { useRouter } from "next/router";
import FormGeneral from "@/components/FormGeneral/index";
import Answer from "@/components/Answer";
import NavButton from "@/components/NavButton";

export default function GeneralInfoPage({
  generalInfo,
  handleGeneralInfo,
  menstruationDaysPerYear,
  formatNumber,
}) {
  const router = useRouter();

  const menstruationDaysTillNow = Math.round(
    generalInfo.age - generalInfo.firstMenstruation < 39
      ? menstruationDaysPerYear *
          (generalInfo.age - generalInfo.firstMenstruation)
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

  function handleNextPage() {
    router.push("/financials");
  }

  return (
    <>
      <h1>Allgemeines</h1>
      {!submittedForm && (
        <FormGeneral
          handleGeneralInfo={handleGeneralInfo}
          handleSubmittedForm={handleSubmittedForm}
          currentValue={currentValue}
          updateCurrentValue={updateCurrentValue}
        />
      )}
      {submittedForm && (
        <>
          <Answer
            personalAnswerText="Du menstruierst"
            unit="Tage"
            year={formatNumber(menstruationDaysPerYear)}
            today={formatNumber(menstruationDaysTillNow)}
            life={formatNumber(menstruationDaysInLife)}
            periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..."
          />
          <NavButton onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
        </>
      )}
    </>
  );
}
