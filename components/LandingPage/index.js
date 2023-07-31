import {
  LandingPageTitle,
  LandingPageSection,
  Footnote,
  StartLink,
  IconContainer,
} from "./styles";
import IconSVG from "../IconSVG";

export default function Landingpage({ title, text, footnote, href }) {
  return (
    <>
      <LandingPageTitle>{title}</LandingPageTitle>
      <StartLink href={href}>
        <LandingPageSection>
          {text}
          <Footnote>{footnote}</Footnote>
          <IconContainer>
            <IconSVG
              icon="water"
              color={`var(--tertier-highlight-color)`}
              size={150}
            />
          </IconContainer>
          <IconContainer $click>
            <IconSVG
              icon="click"
              color={`var(--primary-highlight-color)`}
              size={70}
            />
          </IconContainer>
        </LandingPageSection>
      </StartLink>
    </>
  );
}
