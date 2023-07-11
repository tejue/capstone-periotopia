import Question from "../Question";
import InputNumber from "../InputNumber";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function FormFinancials({ financials, handleFinancials }) {
  const {
    product,
    packageCosts,
    taxReduction,
    taxes,
    packageContent,
    changeProdukt,
  } = financials;

  return (
    <StyledForm>
      <Question
        id="product"
        question="Welches Produkt nutzt du hauptsächlich für deine Menstruation?"
      />
      <select
        id="product"
        name="product"
        value={product}
        onChange={handleFinancials}
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
        value={packageCosts}
        onChange={handleFinancials}
      />
      Euro
      <Question id="taxReduction" question="Wie wird dein Produkt besteuert?" />
      <label>
        <input
          id="taxReduction-full"
          name="taxReduction"
          type="radio"
          value="volle Steuer"
          checked={taxReduction === "volle Steuer"}
          onChange={handleFinancials}
        />
        volle Steuer
      </label>
      <label>
        <input
          id="taxReduction-partial"
          name="taxReduction"
          type="radio"
          value="Teilsteuer"
          checked={taxReduction === "Teilsteuer"}
          onChange={handleFinancials}
        />
        Teilsteuer
      </label>
      <label>
        <input
          id="taxReduction-none"
          name="taxReduction"
          type="radio"
          value="keine Steuer"
          checked={taxReduction === "keine Steuer"}
          onChange={handleFinancials}
        />
        keine Steuer
      </label>
      <Question
        id="taxes"
        question="Wieviel Steuern zahlst du beim Kauf einer Packung?"
      />
      <InputNumber
        id="taxes"
        name="taxes"
        min="0"
        value={taxes}
        onChange={handleFinancials}
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
        value={packageContent}
        onChange={handleFinancials}
      />
      <Question
        id="changeProdukt"
        question="Wie oft wechselst du dein Produkt an einem Tag?"
      />
      <InputNumber
        id="changeProdukt"
        name="changeProdukt"
        min="1"
        value={changeProdukt}
        onChange={handleFinancials}
        disabled={!(product === "Tampon" || product === "Binde")}
      />
    </StyledForm>
  );
}
