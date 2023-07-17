import styled from "styled-components";
import Link from "next/link";

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function NavButton({ onClickQuestion, onClickNextQuestion }) {
  return (
    <NavButtonWrapper>
      <button onClick={onClickQuestion}>zurück</button>
      <Link href="/financials">weiter</Link>
    </NavButtonWrapper>
  );
}
