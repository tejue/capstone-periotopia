import ShowAnswerButton from "../ShowAnswerButton/index";
import FormField from "../FormField/index";
import { StyledForm, AverageWrapper } from "./styles";
import Average from "../Average/index";

export default function FormGeneral({
  handleGeneralInfo,
  handleSubmittedForm,
  currentValue,
  updateCurrentValue,
}) {
  const maxAge = 100;
  const minAge = 8;

  function handleUserInput(event, fieldName) {
    const newValue = { ...currentValue, [fieldName]: event.target.value };
    updateCurrentValue(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleGeneralInfo(data);
    handleSubmittedForm(true);
  }

  function handleAverage(fieldName, averageValue) {
    const updateAverageValue = {
      ...currentValue,
      [fieldName]: averageValue,
    };
    updateCurrentValue(updateAverageValue);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormField
        question="Wie alt bist du?"
        type="number"
        formFieldId="age"
        name="age"
        min={minAge}
        max={maxAge}
        value={currentValue.age}
        onChange={(event) => handleUserInput(event, "age")}
      />
      <AverageWrapper>
        <FormField
          question="Wie alt warst du bei deiner ersten Menstruation?"
          type="number"
          formFieldId="firstMenstruation"
          name="firstMenstruation"
          min={minAge - 1}
          max={currentValue.age}
          value={currentValue.firstMenstruation}
          onChange={(event) => handleUserInput(event, "firstMenstruation")}
        />
        <Average onClick={() => handleAverage("firstMenstruation", 13)} />
      </AverageWrapper>
      <AverageWrapper>
        <FormField
          question="Wieviele Tage dauert dein Zyklus?"
          type="number"
          formFieldId="cyclusLength"
          name="cyclusLength"
          min="1"
          value={currentValue.cyclusLength}
          onChange={(event) => handleUserInput(event, "cyclusLength")}
        />
        <Average onClick={() => handleAverage("cyclusLength", 28)} />
      </AverageWrapper>
      <AverageWrapper>
        <FormField
          question="Wieviele Tage dauert deine Menstruation?"
          type="number"
          formFieldId="menstruationLength"
          name="menstruationLength"
          min="1"
          max={currentValue.cyclusLength - 1}
          value={currentValue.menstruationLength}
          onChange={(event) => handleUserInput(event, "menstruationLength")}
        />
        <Average onClick={() => handleAverage("menstruationLength", 5)} />
      </AverageWrapper>
      <ShowAnswerButton type="submit" />
    </StyledForm>
  );
}
