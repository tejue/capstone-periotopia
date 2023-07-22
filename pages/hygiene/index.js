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

  function minutesPerYearCalc() {
    if (access === "yes") {
      return menstruationDaysPerYear * changeProduct * minutes * 2;
    }
    if (access === "no") {
      return menstruationDaysPerYear * changeProduct * 31 * 2;
    } else return NaN;
  }

  const minutesPerYear = minutesPerYearCalc();

  const daysPerYear = Math.floor(minutesPerYear / (60 * 24));
  const remainingMinutesYear = minutesPerYear % (60 * 24);
  const hoursPerYear = Math.floor(remainingMinutesYear / 60);
  const minutesYear = remainingMinutesYear % 60;

  const minutesTillToday = minutesPerYear * (age - firstMenstruation);
  const daysTillToday = Math.floor(minutesTillToday / (60 * 24));
  const remainingMinutesToday = minutesTillToday % (60 * 24);
  const hoursTillToday = Math.floor(remainingMinutesToday / 60);
  const minutesToday = remainingMinutesToday % 60;

  const minutesInLife = minutesPerYear * 39;
  const daysInLife = Math.floor(minutesInLife / (60 * 24));
  const remainingMinutesLife = minutesInLife % (60 * 24);
  const hoursInLife = Math.floor(remainingMinutesLife / 60);
  const minutesLife = remainingMinutesLife % 60;

  const acceptableValue =
    minutesPerYear >= 0 && minutesTillToday >= 0 && minutesInLife >= 0;

  function handleHygiene(data) {
    setHygiene(data);
  }

  function hygperiotopiaIndexCalc() {
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

  const hygperiotopiaIndex = hygperiotopiaIndexCalc();

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
          personalAnswerText="Für den Weg für deine Menstruationshygiene benötigst du bis zu"
          unit="Minuten"
          year={formatNumber(minutesPerYear)}
          today={formatNumber(minutesTillToday)}
          life={formatNumber(minutesInLife)}
          additionalYear={`das sind ${daysPerYear} Tage, ${formatNumber(
            hoursPerYear
          )} Stunden und ${minutesYear} Minuten`}
          additionalToday={`das sind ${daysTillToday} Tage, ${formatNumber(
            hoursTillToday
          )} Stunden und ${minutesToday} Minuten`}
          additionalLife={`das sind ${daysInLife} Tage, ${formatNumber(
            hoursInLife
          )} Stunden und ${minutesLife} Minuten`}
          periotopiaInfoText="In Periotopia hätten alle Menschen Zugang zu sauberen Sanitäranlagen für ihre Menstruationshygiene"
          periotopiaIndex={hygperiotopiaIndex}
        />
        <NavButton onPrevPage={handlePrevPage} onNextPage={handleNextPage} />
      </>
      {/* )} */}
    </>
  );
}
