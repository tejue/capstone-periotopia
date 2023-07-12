import styled from "styled-components";
import Question from "../Question/index";
import InputNumber from "../InputNumber/index";
import Button from "../Button/index";

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
  handleClick,
}) {
  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  const maxAge = 100;
  const minAge = 8;
  const maxCyclusLength = 60;

  return (
    <>
      <StyledForm>
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
      </StyledForm>
      {/* <Button onClick={handleClick} /> */}
    </>
  );
}
