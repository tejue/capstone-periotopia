import { StyledNewIndex, StyledLink } from "./styles";
import IconSVG from "../IconSVG";

export default function NewIndex({ costsPerYear, periotopiaIndex, taxAmount }) {
  return (
    <StyledNewIndex>
      <p>Ermittle einen Periotopia-Index</p>
      <StyledLink
        href="/aboutyou"
        aria-label="Link to questionnaire for new periotopia-index"
      >
        <IconSVG
          icon="next"
          color={`var(--primary-highlight-color)`}
          size={20}
        />
      </StyledLink>
    </StyledNewIndex>
  );
}
