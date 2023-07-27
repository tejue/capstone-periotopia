import ShowAnswerButton from "../ShowAnswerButton";
import FormField from "../FormField";

export default function FormFinancials({
  handleFinancials,
  handleSubmittedForm,
  currentValue,
  updateCurrentValue,
}) {
  const optionsProduct = [
    { value: "", content: "-- Produkt auswählen --" },
    { value: "tampon", content: "Tampon" },
    { value: "pad", content: "Binde" },
    { value: "cup", content: "Perioden-Cup" },
    { value: "disc", content: "Perioden-Disc" },
    { value: "schlueppi", content: "Perioden-Schlüppi" },
  ];

  const optionsTaxAmount = [
    { formFieldId: "taxAmountFull", value: "full", content: "volle Steuer" },
    {
      formFieldId: "taxAmountPartial",
      value: "partial",
      content: "reduzierte Steuer",
    },
    { formFieldId: "taxAmountNone", value: "none", content: "keine Steuer" },
  ];

  function handleUserInput(event, fieldName) {
    const newValue = { ...currentValue, [fieldName]: event.target.value };
    updateCurrentValue(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleFinancials(data);
    handleSubmittedForm(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        question="Welches Produkt nutzt du hauptsächlich für deine Menstruation?"
        type="select"
        formFieldId="product"
        name="product"
        options={optionsProduct}
        value={currentValue.product}
        onChange={(event) => handleUserInput(event, "product")}
      />
      <FormField
        question="Wieviel kostet eine Packung?"
        type="number"
        formFieldId="packageCosts"
        name="packageCosts"
        min="0"
        value={currentValue.packageCosts}
        onChange={(event) => handleUserInput(event, "packageCosts")}
      />
      <FormField
        question="Wie wird dein Produkt besteuert?"
        type="radio"
        name="taxAmount"
        options={optionsTaxAmount}
        checked={currentValue.taxAmount}
        onChange={(event) => handleUserInput(event, "taxAmount")}
        disabled={
          currentValue.packageCosts === "0" || currentValue.taxes === "0"
        }
      />
      <FormField
        question="Wieviel % Steuern zahlst du beim Kauf einer Packung?"
        type="number"
        formFieldId="taxes"
        name="taxes"
        min="0"
        max="60"
        value={
          currentValue.packageCosts === "0" || currentValue.taxAmount === "none"
            ? "0"
            : currentValue.taxes
        }
        onChange={(event) => handleUserInput(event, "taxes")}
      />
      <FormField
        question="Wieviele Produkte sind in einer Packung enthalten?"
        type="number"
        formFieldId="packageContent"
        name="packageContent"
        min="1"
        value={currentValue.packageContent}
        onChange={(event) => handleUserInput(event, "packageContent")}
      />
      <FormField
        question="Wie oft wechselst du dein Produkt an einem Tag?"
        type="number"
        formFieldId="changeProduct"
        name="changeProduct"
        min="1"
        value={currentValue.changeProduct}
        onChange={(event) => handleUserInput(event, "changeProduct")}
      />
      <ShowAnswerButton />
    </form>
  );
}
