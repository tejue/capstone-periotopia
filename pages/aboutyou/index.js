import FormGeneral from "@/components/FormGeneral/index";

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

  return (
    <>
      <h2>Periotopia</h2>
      <FormGeneral
        handleGeneralInfo={handleGeneralInfo}
        personalAnswerText="Du menstruierst"
        unit="Tage"
        year={formatNumber(menstruationDaysPerYear)}
        today={formatNumber(menstruationDaysTillNow)}
        life={formatNumber(menstruationDaysInLife)}
        periotopiaInfoText="Auch in Periotopia würdest du menstruieren. Ein paar Dinge wären aber anders..."
      />
    </>
  );
}
