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
  onProductChoice,
  onPackageCosts,
  onTaxReduction,
  onTaxes,
  onPackageContent,
  onChangeProdukt,
  product,
  packageCosts,
  taxReduction,
  taxes,
  changeProdukt,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.target;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    const calculatedCostPerYear = Math.round(
      (365 / parseInt(cyclusLength)) * parseInt(menstruationLength)
    );

    handleMenstruationDaysPerYear(calculatedCostPerYear);

    const calculatedCostsTillNow = Math.round(
      calculatedMenstruationDaysPerYear *
        (parseInt(age) - parseInt(firstMenstruation))
    );

    handleMenstruationDaysTillNow(calculatedCostsTillNow);

    const calculatedCostsInLife = Math.round(
      calculatedMenstruationDaysPerYear * 38
    );
    handleMenstruationDaysInLife(calculatedCostsInLife);
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
        //value={product}
        onChange={onProductChoice}
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
        //value={packageCosts}
        onChange={onPackageCosts}
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
        //value={taxes}
        onChange={onTaxes}
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
        //value={product === "Perioden-Cup" ? 1 : ""}
        //max={maxProductContent}
        //value={packageContent}
        onChange={onPackageContent}
      />
      <Question
        id="changeProdukt"
        question="Wie oft wechselst du dein Produkt an einem Tag?"
      />
      <InputNumber
        id="changeProdukt"
        name="changeProdukt"
        min="1"
        //value={changeProdukt}
        onChange={onChangeProdukt}
      />
      <ButtonSubmit />
    </StyledForm>
  );
}
