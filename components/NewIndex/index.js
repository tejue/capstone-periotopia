import { StyledNewIndex, StyledLink, NewIndexTitle } from "./styles";

export default function NewIndex({ costsPerYear, periotopiaIndex, taxAmount }) {
  return (
    <StyledNewIndex>
      <NewIndexTitle>Ermittle einen Periotopia-Index</NewIndexTitle>
      <StyledLink
        href="/intro"
        aria-label="Link to questionnaire for new periotopia-index"
      >
        +
      </StyledLink>
    </StyledNewIndex>
  );
}
