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
  periotopiaIndex,
  handleAddResult,
  newResult,
}) {
  const router = useRouter();

  const [hygiene, setHygiene] = useLocalStorageState("hygiene", {
    defaultValue: [
      {
        access: "",
        minutes: "",
      },
    ],
  });

  const { access, minutes } = hygiene;

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

  const minutesPerYear = 0;
  //   changeProduct * menstruationDaysPerYear * 2;
  const minutesTillToday = minutesPerYear * (age - firstMenstruation);
  const minutesInLife = minutesPerYear * 39;

  const acceptableValue =
    minutesPerYear >= 0 && minutesTillToday >= 0 && minutesInLife >= 0;

  function handleHygiene(data) {
    setHygiene(data);
  }

  return (
    <>
      <h2>Periotopia</h2>
      {/* {!submittedForm &&  */}
      <FormHygiene
        currentValue={currentValue}
        handleHygiene={handleHygiene}
        handleSubmittedForm={handleSubmittedForm}
        updateCurrentValue={updateCurrentValue}
      />
      {/* }
       {submittedForm && ( */}
      <>
        <Answer
          personalAnswerText="Um zum Ort für deine Menstruationshygiene zu gelangen benötigst du"
          unit="Minuten"
          year={formatNumber(minutesPerYear)}
          today={formatNumber(minutesTillToday)}
          life={formatNumber(minutesInLife)}
          periotopiaInfoText="In Periotopia hätten alle Menschen Zugang zu sauberen Sanitäranlagen für ihre Menstruationshygiene"
          periotopiaIndex={periotopiaIndex}
        />
        <NavButton onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
      </>
      {/* )} */}
    </>
  );
}
