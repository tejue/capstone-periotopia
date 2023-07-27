import styled from "styled-components";

export default function ShowAnswerButton() {
  return <button type="submit">Schau dir dein Ergebnis an</button>;
}

export const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
`;
