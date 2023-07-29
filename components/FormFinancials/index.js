import ShowAnswerButton from "../ShowAnswerButton";
import FormField from "../FormField";
import { StyledForm, AverageWrapper } from "./styles";
import Average from "../Average/index";
import { useState } from "react";

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

  const [isAverageClicked, setIsAverageClicked] = useState(false);

  function handleUserInput(event, fieldName) {
    const newValue = { ...currentValue, [fieldName]: event.target.value };

    if (fieldName === "product") {
      if (event.target.value === "tampon") {
        setIsAverageClicked(false);
      } else {
        setIsAverageClicked(true);

        newValue.packageCosts = "";
        newValue.packageContent = "";
        newValue.changeProduct = "";
      }
    }

    updateCurrentValue(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleFinancials(data);
    handleSubmittedForm(true);
  }

  function handleAverage(fieldName, averageValue) {
    const updateAverageValue = {
      ...currentValue,
      [fieldName]: averageValue,
      isAverageClicked: true,
    };
    updateCurrentValue(updateAverageValue);
  }

  const selectTampon = currentValue.product === "tampon";

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormField
        question="Welches Produkt nutzt du hauptsächlich für deine Menstruation?"
        type="select"
        formFieldId="product"
        name="product"
        options={optionsProduct}
        value={currentValue.product}
        onChange={(event) => handleUserInput(event, "product")}
      />
      <AverageWrapper>
        <FormField
          question="Wieviel kostet eine Packung?"
          type="number"
          formFieldId="packageCosts"
          name="packageCosts"
          min="0"
          step="0.05"
          value={currentValue.packageCosts}
          onChange={(event) => handleUserInput(event, "packageCosts")}
        />

        {selectTampon && !isAverageClicked && (
          <Average onClick={() => handleAverage("packageCosts", "4.95")} />
        )}
      </AverageWrapper>
      <AverageWrapper>
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
        <Average onClick={() => handleAverage("taxAmount", "partial")} />
      </AverageWrapper>
      <AverageWrapper>
        <FormField
          question="Wieviel % Steuern zahlst du beim Kauf einer Packung?"
          type="number"
          formFieldId="taxes"
          name="taxes"
          min="0"
          max="60"
          value={
            currentValue.packageCosts === "0" ||
            currentValue.taxAmount === "none"
              ? "0"
              : currentValue.taxes
          }
          onChange={(event) => handleUserInput(event, "taxes")}
        />{" "}
        <Average onClick={() => handleAverage("taxes", "7")} />
      </AverageWrapper>
      <AverageWrapper>
        <FormField
          question="Wieviele Produkte sind in einer Packung enthalten?"
          type="number"
          formFieldId="packageContent"
          name="packageContent"
          min="1"
          value={currentValue.packageContent}
          onChange={(event) => handleUserInput(event, "packageContent")}
        />{" "}
        {selectTampon && !isAverageClicked && (
          <Average onClick={() => handleAverage("packageContent", "64")} />
        )}
      </AverageWrapper>{" "}
      <AverageWrapper>
        <FormField
          question="Wie oft wechselst du dein Produkt an einem Tag?"
          type="number"
          formFieldId="changeProduct"
          name="changeProduct"
          min="1"
          value={currentValue.changeProduct}
          onChange={(event) => handleUserInput(event, "changeProduct")}
        />
        {selectTampon && !isAverageClicked && (
          <Average onClick={() => handleAverage("changeProduct", "4")} />
        )}
      </AverageWrapper>
      <ShowAnswerButton />
    </StyledForm>
  );
}
