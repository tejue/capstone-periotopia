import styled from "styled-components";
import Link from "next/link";

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function NavButton({
  onPrevPage,
  nextPage,
  handleAddResult,
  onClick,
}) {
  return (
    <>
      <NavButtonWrapper>
        <button onClick={onPrevPage}>zurück</button>
        <button onClick={onClick}>Ergebnisse</button>
        <Link href="/">zur Startseite</Link>
      </NavButtonWrapper>
    </>
  );
}
