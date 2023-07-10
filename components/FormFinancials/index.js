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

export default function FormFinancials({ onProductChoice }) {
  return (
    <StyledForm>
      <Question
        id="product"
        question="Welches Produkt nutzt du hauptsächlich für deine Menstruation?"
      />
      <select
        id="product"
        name="product"
        //value={product}
        //onChange={onProductChoice}
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
        //onChange={}
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
        //onChange={}
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
        //onChange={}
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
        //onChange={}
      />
      <ButtonSubmit />
    </StyledForm>
  );
}
