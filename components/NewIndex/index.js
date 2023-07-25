import { StyledNewIndex, StyledLink } from "./styles";

export default function NewIndex({ costsPerYear, periotopiaIndex, taxAmount }) {
  return (
    <StyledNewIndex>
      <p>Ermittle einen Periotopia-Index</p>
      <StyledLink
        href="/aboutyou"
        aria-label="Link to questionnaire for new periotopia-index"
      >
        +
      </StyledLink>
    </StyledNewIndex>
  );
}
