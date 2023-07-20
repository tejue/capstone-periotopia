import FormGeneral from "@/components/FormGeneral/index";
import Answer from "@/components/Answer";
import { useState } from "react";
import NavButton from "@/components/NavButton";
import { useRouter } from "next/router";

export default function GeneralInfoPage({
  handleGeneralInfo,
  generalInfo,
  formatNumber,
  menstruationDaysPerYear,
}) {
  const router = useRouter();

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

  function handleNextPage() {
    router.push("/financials");
  }

  return (
    <>
      <h2>Periotopia</h2>
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
