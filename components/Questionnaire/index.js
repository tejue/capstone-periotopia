import styled from "styled-components";

const StyledQuestion = styled.label`
  margin-top: 20px;
`;

export default function Questionnaire({
  id,
  question,
  name,
  type,
  min,
  max,
  step,
  value,
  onChange,
}) {
  return (
    <>
      <StyledQuestion htmlFor={id}>{question}</StyledQuestion>
      <input
        id={id}
        name={name}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        required
      />
      <select>
        <option1></option1>
        <option2></option2>
      </select>
    </>
  );
}

//const defaultValue = value !== undefined ? value : "";
