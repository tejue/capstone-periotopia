import styled from "styled-components";
import Question from "../Question";
import InputNumber from "../InputNumber";
import { useState } from "react";
import ShowAnswerButton from "../ShowAnswerButton";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

export default function FormFinancials({
  handleFinancials,
  handleSubmittedForm,
  currentValue,
  updateCurrentValue,
}) {
  // const [currentValue, setCurrentValue] = useState({
  //   product: "",
  //   packageCosts: "",
  //   taxAmount: "",
  //   taxes: "",
  //   packageContent: "",
  //   changeProduct: "",
  // });

  function handleUserInput(event, fieldName) {
    const newValue = { ...currentValue, [fieldName]: event.target.value };
    updateCurrentValue(newValue);
    // setCurrentValue({ ...currentValue, [fieldName]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleFinancials(data);
    handleSubmittedForm(true);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Question
        id="product"
        question="Welches Produkt nutzt du hauptsächlich für deine Menstruation?"
      />
      <select
        id="product"
        name="product"
        value={currentValue.product}
        onChange={(event) => handleUserInput(event, "product")}
      >
        <option value="">-- Produkt auswählen --</option>
        <option value="tampon">Tampon</option>
        <option value="pad">Binde</option>
        <option value="cup">Perioden-Cup</option>
        <option value="disc">Perioden-Disc</option>
        <option value="schlueppi">Perioden-Schlüppi</option>
      </select>
      <Question id="packageCosts" question="Wieviel kostet eine Packung?" />
      <InputNumber
        id="packageCosts"
        name="packageCosts"
        min="0"
        value={currentValue.packageCosts}
        onChange={(event) => handleUserInput(event, "packageCosts")}
      />
      Euro
      <StyledFieldset>
        <legend>Wie wird dein Produkt besteuert?</legend>
        <label htmlFor="taxAmountFull">
          <input
            id="taxAmountFull"
            name="taxAmount"
            type="radio"
            value="full"
            checked={currentValue.taxAmount === "full"}
            onChange={(event) => handleUserInput(event, "taxAmount")}
            disabled={
              currentValue.packageCosts === "0" || currentValue.taxes === "0"
            }
          />
          volle Steuer
        </label>
        <label htmlFor="taxAmountPartial">
          <input
            id="taxAmountPartial"
            name="taxAmount"
            type="radio"
            value="partial"
            checked={currentValue.taxAmount === "partial"}
            onChange={(event) => handleUserInput(event, "taxAmount")}
            disabled={
              currentValue.packageCosts === "0" || currentValue.taxes === "0"
            }
          />
          reduzierte Steuer
        </label>
        <label htmlFor="taxAmountNone">
          <input
            id="taxAmountNone"
            name="taxAmount"
            type="radio"
            value="none"
            checked={currentValue.taxAmount === "none"}
            onChange={(event) => handleUserInput(event, "taxAmount")}
          />
          keine Steuer
        </label>
      </StyledFieldset>
      <Question
        id="taxes"
        question="Wieviel Steuern zahlst du beim Kauf einer Packung?"
      />
      <InputNumber
        id="taxes"
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
      %
      <Question
        id="packageContent"
        question="Wieviele Produkte sind in einer Packung enthalten?"
      />
      <InputNumber
        id="packageContent"
        name="packageContent"
        min="1"
        value={currentValue.packageContent}
        onChange={(event) => handleUserInput(event, "packageContent")}
      />
      <Question
        id="changeProduct"
        question="Wie oft wechselst du dein Produkt an einem Tag?"
      />
      <InputNumber
        id="changeProduct"
        name="changeProduct"
        min="1"
        value={currentValue.changeProduct}
        onChange={(event) => handleUserInput(event, "changeProduct")}
      />
      <ShowAnswerButton />
    </StyledForm>
  );
}
