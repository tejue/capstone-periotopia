import styled from "styled-components";
import Question from "../Question/index";
import InputNumber from "../InputNumber/index";
import { useState } from "react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function FormGeneral({ handleGeneralInfo }) {
  const maxAge = 100;
  const minAge = 8;

  const [currentValue, setCurrentValue] = useState({
    age: "",
    cyclusLength: "",
  });

  function handleUserInput(event, fieldName) {
    setCurrentValue({ ...currentValue, [fieldName]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleGeneralInfo(data);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Question id="age" question="Wie alt bist du?" />
        <InputNumber
          id="age"
          name="age"
          min={minAge}
          max={maxAge}
          value={currentValue.age}
          onChange={(event) => handleUserInput(event, "age")}
        />
        <Question
          id="firstMenstruation"
          question="Wie alt warst du bei deiner ersten Menstruation?"
        />
        <InputNumber
          id="firstMenstruation"
          name="firstMenstruation"
          min={minAge - 1}
          max={currentValue.age}
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
          value={currentValue.cyclusLength}
          onChange={(event) => handleUserInput(event, "cyclusLength")}
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
          max={currentValue.cyclusLength - 1}
        />
        <button type="submit">Schau dir dein Ergebnis an</button>
      </StyledForm>
    </>
  );
}
