import styled from "styled-components";
import Link from "next/link";

const StyledNewIndex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightcoral;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  border: solid thin;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export default function NewIndex() {
  return (
    <StyledNewIndex>
      <p>Ermittle einen Periotopia-Index</p>
      <StyledLink
        href="/questionnaire"
        aria-label="Link to questionnaire for new periotopia-index"
      >
        +
      </StyledLink>
    </StyledNewIndex>
  );
}
