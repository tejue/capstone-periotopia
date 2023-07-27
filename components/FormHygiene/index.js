import FormField from "../FormField/index";
import ShowAnswerButton from "../ShowAnswerButton/index";

export default function FormHygiene({
  currentValue,
  updateCurrentValue,
  handleHygiene,
  handleSubmittedForm,
}) {
  const optionsAccess = [
    { formFieldId: "yes", value: "yes", content: "ja" },
    { formFieldId: "no", value: "no", content: "nein" },
  ];

  const optionsMinutes = [
    { formFieldId: "1min", value: "1", content: "maximal 1 Minute" },
    { formFieldId: "15min", value: "15", content: "maximal 15 Minuten" },
    { formFieldId: "30min", value: "30", content: "maximal 30 Minuten" },
  ];

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
    <form onSubmit={handleSubmit}>
      <FormField
        question="Hast du Zugang zu einer sauberen und sichere Sanitäranlage um dein Menstruationsprodukt zu wechseln?"
        type="radio"
        name="access"
        options={optionsAccess}
        checked={currentValue.access}
        onChange={(event) => handleUserInput(event, "access")}
      />
      <FormField
        question="Wenn ja, wie lange läufst du, um diesen Ort zu erreichen?"
        type="radio"
        name="minutes"
        options={optionsMinutes}
        checked={currentValue.minutes}
        onChange={(event) => handleUserInput(event, "minutes")}
        disabled={currentValue.access === "no"}
      />
      <ShowAnswerButton />
    </form>
  );
}
