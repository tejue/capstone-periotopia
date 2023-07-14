import styled from "styled-components";
import Question from "../Question";
import InputNumber from "../InputNumber";

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
  const {
    product,
    packageCosts,
    taxReduction,
    taxes,
    packageContent,
    changeProduct,
  } = financials;

  // function handleChange(event) {
  //   const { name, value } = event.target;
  // }

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
        // value={product}
        // onChange={handleFinancials}
        required
      >
        <option>-- Produkt auswählen --</option>
        <option>Tampon</option>
        <option>Binde</option>
        <option>Perioden-Cup</option>
        <option>Perioden-Disc</option>
        <option>Perioden-Schlüppi</option>
      </select>
      <Question id="packageCosts" question="Wieviel kostet eine Packung?" />
      <InputNumber
        id="packageCosts"
        name="packageCosts"
        min="0"
        // value={packageCosts}
        // onChange={handleFinancials}
      />
      Euro
      <StyledFieldset>
        <legend>Wie wird dein Produkt besteuert?</legend>
        <label htmlFor="taxReduction-full">
          <input
            id="taxReduction-full"
            name="taxReduction"
            type="radio"
            // value="volle Steuer"
            checked={taxReduction === "volle Steuer"}
            // onChange={handleFinancials}
            disabled={packageCosts === "0"}
          />
          volle Steuer
        </label>
        <label htmlFor="taxReduction-partial">
          <input
            id="taxReduction-partial"
            name="taxReduction"
            type="radio"
            // value="Teilsteuer"
            checked={taxReduction === "Teilsteuer"}
            // onChange={handleFinancials}
            disabled={packageCosts === "0"}
          />
          Teilsteuer
        </label>
        <label htmlFor="taxReduction-none">
          <input
            id="taxReduction-none"
            name="taxReduction"
            type="radio"
            // value="keine Steuer"
            checked={taxReduction === "keine Steuer"}
            // onChange={handleFinancials}
            disabled={packageCosts === "0"}
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
        // value={taxes}
        // onChange={handleFinancials}
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
        // onChange={handleFinancials}
      />
      <Question
        id="changeProduct"
        question="Wie oft wechselst du dein Produkt an einem Tag?"
      />
      <InputNumber
        id="changeProduct"
        name="changeProduct"
        min="1"
        // value={changeProduct}
        // onChange={handleFinancials}
      />
      <button type="submit">Schau dir deinen Periotopia-Index</button>
    </StyledForm>
  );
}
