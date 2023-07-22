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
    defaultValue: {
      access: "",
      minutes: "",
    },
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

  function calculateTime(minutes) {
    const days = Math.floor(minutes / (60 * 24));
    const remainingMinutes = minutes % (60 * 24);
    const hours = Math.floor(remainingMinutes / 60);
    const minutesValue = remainingMinutes % 60;
    return { days, hours, minutes: minutesValue };
  }

  function minutesPerYearCalc() {
    if (access === "yes") {
      return menstruationDaysPerYear * changeProduct * minutes * 2;
    }
    if (access === "no") {
      return menstruationDaysPerYear * changeProduct * 31 * 2;
    } else return NaN;
  }

  const minutesPerYear = minutesPerYearCalc();
  const minutesTillToday = minutesPerYear * (age - firstMenstruation);
  const minutesInLife = minutesPerYear * 39;

  const timeTillToday = calculateTime(minutesTillToday);
  const timeInLife = calculateTime(minutesInLife);

  function handleHygiene(data) {
    setHygiene(data);
  }

  function formatTime(time) {
    const { days, hours, minutes } = time;
    let formattedTime = "";

    if (days > 0) formattedTime += `${days} Tag${days !== 1 ? "e" : ""}`;
    if (hours > 0)
      formattedTime += `${
        formattedTime ? (minutes > 0 ? ", " : " und ") : ""
      }${hours} Stunde${hours !== 1 ? "n" : ""}`;
    if (minutes > 0)
      formattedTime += `${formattedTime ? " und " : ""}${minutes} Minute${
        minutes !== 1 ? "n" : ""
      }`;

    return formattedTime;
  }

  function periotopiaIndexHygieneCalc() {
    if (minutes === "1") {
      return "100%";
    }
    if (minutes === "15") {
      return "66%";
    }
    if (minutes === "30") {
      return "33%";
    } else {
      return "0%";
    }
  }
  const periotopiaIndexHygiene = periotopiaIndexHygieneCalc();

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
            year={minutesPerYear}
            today={minutesTillToday}
            life={minutesInLife}
            additionalYear={`das sind ${formatTime(timeTillToday)}`}
            additionalToday={`das sind ${formatTime(timeInLife)} `}
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
