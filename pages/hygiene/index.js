import { useState } from "react";
import FormHygiene from "@/components/FormHygiene";
import Answer from "@/components/Answer";
import NavButton from "@/components/NavButton";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function HygienePage({
  generalInfo,
  financials,
  formatNumber,
  menstruationDaysPerYear,
  periotopiaIndexHygiene,
  handleAddResult,
  newResult,
  timePerYear,
  minutesPerYear,
  calculateTime,
  handleHygiene,
  formatTime,
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
    access: "",
    minutes: "",
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
    router.push("/");
  }

  const minutesTillToday = minutesPerYear * (age - firstMenstruation);
  const minutesInLife = minutesPerYear * 39;

  const timeTillToday = calculateTime(minutesTillToday);
  const timeInLife = calculateTime(minutesInLife);

  const acceptableValue =
    minutesPerYear >= 0 && minutesTillToday >= 0 && minutesInLife >= 0;

  return (
    <>
      <h2>Periotopia</h2>
      {!submittedForm && (
        <FormHygiene
          currentValue={currentValue}
          handleHygiene={handleHygiene}
          handleSubmittedForm={handleSubmittedForm}
          updateCurrentValue={updateCurrentValue}
        />
      )}
      {submittedForm && (
        <>
          <Answer
            personalAnswerText="Für den Weg für deine Menstruationshygiene benötigst du bis zu"
            unit="Minuten"
            year={formatNumber(minutesPerYear)}
            today={formatNumber(minutesTillToday)}
            life={formatNumber(minutesInLife)}
            additionalYear={`das sind ${formatTime(timePerYear)}`}
            additionalToday={`das sind ${formatTime(timeTillToday)} `}
            additionalLife={`das sind ${formatTime(timeInLife)} `}
            periotopiaInfoText="In Periotopia hätten alle Menschen Zugang zu sauberen Sanitäranlagen für ihre Menstruationshygiene"
            periotopiaIndex={periotopiaIndexHygiene}
          />
          <NavButton onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
        </>
      )}
    </>
  );
}
