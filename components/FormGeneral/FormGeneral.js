import styled from "styled-components";
import Question from "../Question/Question";
import InputNumber from "../InputNumber/InputNumber";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function FormGeneral({
  onAgeChange,
  onFirstMenstruationChange,
  onCyclusLengthChange,
  onMenstruationLengthChange,
  age,
  firstMenstruation,
  cyclusLength,
  menstruationLength,
  handleMenstruationDaysPerYear,
  handleMenstruationDaysTillNow,
  handleMenstruationDaysInLife,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    const calculatedMenstruationDaysPerYear = Math.round(
      (365 / parseInt(cyclusLength)) * parseInt(menstruationLength)
    );

    handleMenstruationDaysPerYear(calculatedMenstruationDaysPerYear);

    const calculatedMenstruationDaysTillNow = Math.round(
      calculatedMenstruationDaysPerYear *
        (parseInt(age) - parseInt(firstMenstruation))
    );

    handleMenstruationDaysTillNow(calculatedMenstruationDaysTillNow);

    const calculatedMenstruationDaysInLife = Math.round(
      calculatedMenstruationDaysPerYear * 38
    );
    handleMenstruationDaysInLife(calculatedMenstruationDaysInLife);
  }

  const maxAge = 100;
  const minAge = 8;
  const maxCyclusLength = 60;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Question id="age" type="number" question="Wie alt bist du?" />
      <InputNumber
        id="age"
        name="age"
        min={minAge}
        max={maxAge}
        value={age}
        onChange={onAgeChange}
      />
      <Question
        id="firstMenstruation"
        type="number"
        question="Wie alt warst du bei deiner ersten Menstruation?"
      />
      <InputNumber
        id="firstMenstruation"
        name="firstMenstruation"
        min={minAge - 1}
        max={age !== "" ? age - 1 : maxAge - 1}
        value={firstMenstruation}
        onChange={onFirstMenstruationChange}
      />
      <Question
        id="cyclusLength"
        type="cyclusLength"
        question="Wie oft beginnt deine Menstruation?"
      />
      Alle
      <InputNumber
        id="cyclusLength"
        name="age"
        min="1"
        max={maxCyclusLength}
        value={cyclusLength}
        onChange={onCyclusLengthChange}
      />
      Tage
      <Question
        id="menstruationLength"
        type="number"
        question="Wieviele Tage dauert deine Menstruation?"
      />
      <InputNumber
        id="menstruationLength"
        name="menstruationLength"
        min="1"
        max={cyclusLength !== "" ? cyclusLength - 1 : maxCyclusLength - 1}
        value={menstruationLength}
        onChange={onMenstruationLengthChange}
      />
      <ButtonSubmit />
    </StyledForm>
  );
}
