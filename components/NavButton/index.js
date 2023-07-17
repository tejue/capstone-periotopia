import styled from "styled-components";

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function NavButton({ onClickQuestion, onClickNextQuestion }) {
  return (
    <NavButtonWrapper>
      <button onClick={onClickQuestion}>zurück</button>
      <button onClick={onClickNextQuestion}>weiter</button>
    </NavButtonWrapper>
  );
}
