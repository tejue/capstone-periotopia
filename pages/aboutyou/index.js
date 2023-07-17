import FormGeneral from "@/components/FormGeneral/index";
import Answer from "@/components/Answer";

export default function GeneralInfoPage({
  handleGeneralInfo,
  generalInfo,
  formatNumber,
  menstruationDaysPerYear,
  handleSubmittedForm,
  submittedForm,
  handlePrevPage,
}) {
  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  const menstruationDaysTillNow = Math.round(
    age - firstMenstruation < 39
      ? menstruationDaysPerYear * (age - firstMenstruation)
      : menstruationDaysPerYear * 39
  );

  const menstruationDaysInLife = Math.round(menstruationDaysPerYear * 39);

  return (
    <>
      <h2>Periotopia</h2>
      {!submittedForm && (
        <FormGeneral
          handleGeneralInfo={handleGeneralInfo}
          handleSubmittedForm={handleSubmittedForm}
        />
      )}
      {submittedForm && (
        <Answer
          personalAnswerText="Du menstruierst"
          unit="Tage"
          year={formatNumber(menstruationDaysPerYear)}
          today={formatNumber(menstruationDaysTillNow)}
          life={formatNumber(menstruationDaysInLife)}
          periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..."
          onPrevPage={handlePrevPage}
          nextPage="/financials"
        />
      )}
    </>
  );
}
