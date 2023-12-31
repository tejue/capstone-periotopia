import { useState } from "react";
import { useRouter } from "next/router";
import FormHygiene from "../../components/FormHygiene";
import Header from "@/components/Header";
import Answer from "../../components/Answer";
import NavButton from "../../components/NavButton";
import IconSVG from "@/components/IconSVG";

export default function HygienePage({
  hygiene,
  handleHygiene,
  generalInfo,
  minutesPerYear,
  calculateTime,
  timePerYear,
  newResult,
  handleAddResult,
  periotopiaIndexHygiene,
  formatNumber,
  formatTime,
}) {
  const router = useRouter();

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
    router.push("/periotopiaindex");
  }

  const minutesTillToday =
    minutesPerYear * (generalInfo.age - generalInfo.firstMenstruation);
  const minutesInLife = minutesPerYear * 39;

  const timeTillToday = calculateTime(minutesTillToday);
  const timeInLife = calculateTime(minutesInLife);

  const acceptableValue =
    minutesPerYear >= 0 && minutesTillToday >= 0 && minutesInLife >= 0;

  return (
    <>
      <Header>
        <IconSVG
          icon="handwash"
          color={`var(--tertier-highlight-color)`}
          size={55}
        />
      </Header>
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
            personalAnswerText={
              hygiene.access === "no"
                ? `Du hast keinen Zugang zu einer sauberen und sicheren Sanitäranlage um dein Menstruationsprodukt zu wechseln oder benötigst mindestens`
                : `Um dein Menstruationsprodukt zu wechseln benötigst du für den Hin- und Rückweg zu einer Sanitäranlage bis zu`
            }
            unit="Minuten"
            year={formatNumber(minutesPerYear)}
            today={formatNumber(minutesTillToday)}
            life={formatNumber(minutesInLife)}
            additionalYear={`das sind ${formatTime(timePerYear)}`}
            additionalToday={`das sind ${formatTime(timeTillToday)} `}
            additionalLife={`das sind ${formatTime(timeInLife)} `}
            periotopiaInfoText="In Periotopia hätten alle Menschen Zugang zu sauberen und sicheren Sanitäranlagen für eine würdevolle und gesunde Menstruationshygiene."
            periotopiaIndex={periotopiaIndexHygiene}
          />
          <NavButton
            type="button"
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        </>
      )}
    </>
  );
}
