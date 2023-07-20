import styled from "styled-components";

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function NavButton({ onPrevPage, onNextPage }) {
  return (
    <>
      <NavButtonWrapper>
        <button onClick={onPrevPage}>zurück</button>
        <button onClick={onNextPage}>weiter</button>
      </NavButtonWrapper>
    </>
  );
}
