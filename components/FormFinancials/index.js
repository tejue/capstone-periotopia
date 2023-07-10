import Question from "../Question";
import InputNumber from "../InputNumber";
import ButtonSubmit from "../ButtonSubmit";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: lightcoral;
  padding: 20px;
`;

export default function FormFinancials({
  financials,
  handleFinancials,
  handleCostsPerCyclus,
  handleCostsPerYear,
  handleCostsTillToday,
  handleCostsInLife,
  generalInfo,
}) {
  const {
    product,
    packageCosts,
    taxReduction,
    taxes,
    packageContent,
    changeProdukt,
  } = financials;

  const { age, firstMenstruation, cyclusLength, menstruationLength } =
    generalInfo;

  function handleSubmit(event) {
    event.preventDefault();

    // const formElement = event.target;
    // const formData = new FormData(formElement);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    const calculatedCostsPerCyclus = Math.round(
      (packageCosts / packageContent) * (changeProdukt * menstruationLength)
    );
    handleCostsPerCyclus(calculatedCostsPerCyclus);

    const calculatedCostsPerYear = Math.round(
      (calculatedCostsPerCyclus / cyclusLength) *
        ((365 / cyclusLength) * menstruationLength)
    );
    handleCostsPerYear(calculatedCostsPerYear);

    const calculatedCostsTillToday = Math.round(
      calculatedCostsPerYear * (age - firstMenstruation)
    );
    handleCostsTillToday(calculatedCostsTillToday);

    const calculatedCostsInLife = Math.round(calculatedCostsPerYear * 38);
    handleCostsInLife(calculatedCostsInLife);
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
        value={product}
        onChange={handleFinancials}
        required
      >
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
        <input id="taxReduction" name="taxReduction" type="radio" />
        volle Steuer
      </label>
      <label>
        <input id="taxReduction" name="taxReduction" type="radio" />
        Teilsteuer
      </label>
      <label>
        <input id="taxReduction" name="taxReduction" type="radio" />
        keine Steuern
      </label>
      <Question
        id="taxes"
        question="Wieviel Steuern zahlst du beim Kauf einer Packung?"
      />
      <InputNumber
        id="taxes"
        name="taxes"
        min="1"
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
        type="number"
      />
      <InputNumber
        id="changeProdukt"
        name="changeProdukt"
        min="1"
        value={changeProdukt}
        onChange={handleFinancials}
        type="number"
      />
      <ButtonSubmit />
    </StyledForm>
  );
}
