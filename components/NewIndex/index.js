import { StyledNewIndex, StyledLink, NewIndexTitle } from "./styles";
import IconSVG from "../IconSVG";

export default function NewIndex({ costsPerYear, periotopiaIndex, taxAmount }) {
  return (
    <StyledNewIndex>
      <NewIndexTitle>Ermittle einen Periotopia-Index</NewIndexTitle>
      <StyledLink
        href="/aboutyou"
        aria-label="Link to questionnaire for new periotopia-index"
      >
        {/* <IconSVG
          icon="next"
          color={`var(--primary-highlight-color)`}
          size={20}
        /> */}
        +
      </StyledLink>
    </StyledNewIndex>
  );
}
