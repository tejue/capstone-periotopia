import FormField from "../FormField/index";
import ShowAnswerButton from "../ShowAnswerButton/index";
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function FormHygiene() {
  const minutes = [
    { formFieldId: "1min", value: "1", content: "maximal 1 Minute" },
    { formFieldId: "15min", value: "15", content: "maximal 15 Minuten" },
    { formFieldId: "30min", value: "30", content: "maximal 30 Minuten" },
    { formFieldId: "31min", value: "31", content: "mehr als 30 Minuten" },
  ];

  const [currentValue, setCurrentValue] = useState({
    minutes: "",
  });
  function updateCurrentValue(newValue) {
    setCurrentValue(newValue);
  }

  function handleUserInput(event, fieldName) {
    const newValue = { ...currentValue, [fieldName]: event.target.value };
    updateCurrentValue(newValue);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleHygiene(data);
    handleSubmittedForm(true);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* <FormField
        formFieldId="Test"
        question="Wieviele Minuten brauchst du etwa zu dem Ort, an dem du deine Menstruationshygiene furchführen kannst?"
        type="number"
        // value={numericValue}
        // onChange={handleNumberChange}
        min={0}
        max={100}
      /> */}
      <FormField
      // type="select"
      // formId="minutes"
      // question="Wieviele Minuten brauchst du etwa zu dem Ort, an dem du deine Menstruationshygiene furchführen kannst?"
      // name="minutes"

      // value="minutes"
      // value={currentValue.minutes}
      // onChange={(event) => handleUserInput(event, "minutes")}

      // options={minutesToSanitary}
      // placeholder="bitte wähle aus"

      // options={selectOptions}
      // value={selectedOption}
      // onChange={handleSelectChange}
      // className="my-select"
      />

      <FormField
        question="Wie weit ist dein (regulärerer) Weg zu der Sanitäranlage für deine Menstruationshygiene?"
        type="radio"
        name="minutes"
        options={minutes}
        checked={currentValue.minutes}
        onChange={(event) => handleUserInput(event, "minutes")}
      />
      <ShowAnswerButton />
    </StyledForm>
  );
}
