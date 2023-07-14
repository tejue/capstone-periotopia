import styled from "styled-components";
import Question from "../Question";
import InputNumber from "../InputNumber";
import { useState } from "react";

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

export default function FormFinancials({ financials, handleFinancials }) {
  // const {
  //   product,
  //   packageCosts,
  //   taxReduction,
  //   taxes,
  //   packageContent,
  //   changeProduct,
  // } = financials;

  const [currentValue, setCurrentValue] = useState({
    product: "",
    packageCosts: "",
    taxes: "",
  });

  console.log("DER CURRENT VALUE", currentValue);

  function handleUserInput(event, fieldName) {
    setCurrentValue({ ...currentValue, [fieldName]: event.target.value });

    // if (fieldName === "product") {
    //   setCurrentValue({ ...currentValue, product: event.target.value });
    // }

    // if (fieldName === "packageCosts") {
    //   setCurrentValue({
    //     ...currentValue,
    //     packageCosts: event.target.value,
    //   });
    // }

    // if (fieldName === "taxes") {
    //   setCurrentValue({
    //     ...currentValue,
    //     taxes: event.target.value,
    //   });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleFinancials(data);
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
        <label htmlFor="taxReductionFull">
          <input
            id="taxReductionFull"
            name="taxAmount"
            type="radio"
            value="full"
            checked={currentValue.taxAmount === "full"}
            onChange={(event) => handleUserInput(event, "taxAmount")}
          />
          volle Steuer
        </label>
        <label htmlFor="taxReductionPartial">
          <input
            id="taxReductionPartial"
            name="taxAmount"
            type="radio"
            value="partial"
            checked={currentValue.taxAmount === "partial"}
            onChange={(event) => handleUserInput(event, "taxAmount")}
          />
          Teilsteuer
        </label>
        <label htmlFor="taxReductionNone">
          <input
            id="taxReductionNone"
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
        value={currentValue.taxes}
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
        // value={
        //   product === "Tampon" || product === "Binde"
        //     ? packageContent
        //     : product === "Perioden-Disc" ||
        //       product === "Perioden-Cup" ||
        //       product === "Perioden-Schlüppi"
        //     ? "1"
        //     : ""
        // }
      />
      <Question
        id="changeProduct"
        question="Wie oft wechselst du dein Produkt an einem Tag?"
      />
      <InputNumber id="changeProduct" name="changeProduct" min="1" />
      <button type="submit">Schau dir deinen Periotopia-Index</button>
    </StyledForm>
  );
}
