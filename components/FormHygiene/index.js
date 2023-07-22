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
  const access = [
    { formFieldId: "yes", value: "yes", content: "ja" },
    { formFieldId: "no", value: "no", content: "nein" },
  ];

  const minutes = [
    { formFieldId: "1min", value: "1", content: "maximal 1 Minute" },
    { formFieldId: "15min", value: "15", content: "maximal 15 Minuten" },
    { formFieldId: "30min", value: "30", content: "maximal 30 Minuten" },
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
      <FormField
        question="Hast du Zugang zu einer hygienischen Sanitäranlage, bei der du in geschütztem Raum deine Menstruationshygiene durchführen kannst?"
        type="radio"
        name="access"
        options={access}
        checked={currentValue.access}
        onChange={(event) => handleUserInput(event, "access")}
      />
      <FormField
        question="Wie weit ist dein (regulärerer) Weg zu der Sanitäranlage für deine Menstruationshygiene?"
        type="radio"
        name="minutes"
        options={minutes}
        checked={currentValue.minutes}
        onChange={(event) => handleUserInput(event, "minutes")}
        disabled={currentValue.access === "no"}
      />
      <ShowAnswerButton />
    </StyledForm>
  );
}
