import styled from "styled-components";
import Link from "next/link";

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function NavButton({ onPrevPage, nextPage }) {
  return (
    <NavButtonWrapper>
      <button onClick={onPrevPage}>zurück</button>
      {nextPage && <Link href={nextPage}>weiter</Link>}
    </NavButtonWrapper>
  );
}
