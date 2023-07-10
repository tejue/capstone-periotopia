import styled from "styled-components";
import Question from "../Question/index";
import InputNumber from "../InputNumber/index";
import ButtonSubmit from "../ButtonSubmit/index";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function FormGeneral({
  handleGeneralInfo,
  generalInfo,
  handleMenstruationDaysPerYear,
  handleMenstruationDaysTillNow,
  handleMenstruationDaysInLife,
}) {
  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  function handleSubmit(event) {
    event.preventDefault();

    // const formElement = event.target;
    // const formData = new FormData(formElement);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    const calculatedMenstruationDaysPerYear = Math.round(
      (365 / cyclusLength) * menstruationLength
    );

    handleMenstruationDaysPerYear(calculatedMenstruationDaysPerYear);

    const calculatedMenstruationDaysTillNow = Math.round(
      calculatedMenstruationDaysPerYear * (age - firstMenstruation)
    );
    handleMenstruationDaysTillNow(calculatedMenstruationDaysTillNow);

    const calculatedMenstruationDaysInLife = Math.round(
      calculatedMenstruationDaysPerYear * 38
    );
    handleMenstruationDaysInLife(calculatedMenstruationDaysInLife);
  }

  // const calculateValues = () => {
  //   const cyclusLength = parseInt(generalInfo.cyclusLength);
  //   const menstruationLength = parseInt(generalInfo.menstruationLength);
  //   const age = parseInt(generalInfo.age);
  //   const firstMenstruation = parseInt(generalInfo.firstMenstruation);

  //   const calculatedMenstruationDaysPerYear = Math.round((365 / cyclusLength) * menstruationLength);
  //   const calculatedMenstruationDaysTillNow = Math.round(
  //     calculatedMenstruationDaysPerYear * (age - firstMenstruation)
  //   );
  //   const calculatedMenstruationDaysInLife = Math.round(calculatedMenstruationDaysPerYear * 38);

  //   handleMenstruationDaysPerYear(calculatedMenstruationDaysPerYear);
  //   handleMenstruationDaysTillNow(calculatedMenstruationDaysTillNow);
  //   handleMenstruationDaysInLife(calculatedMenstruationDaysInLife);
  // };

  const maxAge = 100;
  const minAge = 8;
  const maxCyclusLength = 60;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Question id="age" question="Wie alt bist du?" />
      <InputNumber
        id="age"
        name="age"
        min={minAge}
        max={maxAge}
        value={age}
        onChange={handleGeneralInfo}
      />
      <Question
        id="firstMenstruation"
        question="Wie alt warst du bei deiner ersten Menstruation?"
      />
      <InputNumber
        id="firstMenstruation"
        name="firstMenstruation"
        min={minAge - 1}
        max={age !== "" ? age - 1 : maxAge - 1}
        value={firstMenstruation}
        onChange={handleGeneralInfo}
      />
      <Question
        id="cyclusLength"
        question="Wie oft beginnt deine Menstruation?"
      />
      Alle
      <InputNumber
        id="cyclusLength"
        name="cyclusLength"
        min="1"
        max={maxCyclusLength}
        value={cyclusLength}
        onChange={handleGeneralInfo}
      />
      Tage
      <Question
        id="menstruationLength"
        question="Wieviele Tage dauert deine Menstruation?"
      />
      <InputNumber
        id="menstruationLength"
        name="menstruationLength"
        min="1"
        max={cyclusLength !== "" ? cyclusLength - 1 : maxCyclusLength - 1}
        value={menstruationLength}
        onChange={handleGeneralInfo}
      />
      <ButtonSubmit />
    </StyledForm>
  );
}
