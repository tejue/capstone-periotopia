import {
  IntroHeading,
  IntroWrapper,
  Footnote,
  Startlink,
  IconWrapper,
} from "./styles";
import IconSVG from "../IconSVG";

export default function Intro({ introheading, introtext, footnote, href }) {
  return (
    <>
      <IntroHeading>{introheading}</IntroHeading>
      <Startlink href={href}>
        <IntroWrapper>
          <p>{introtext}</p>
          <Footnote>{footnote}</Footnote>
        </IntroWrapper>
        <IconWrapper>
          <IconSVG icon="water" color="#fb5c5b" />
        </IconWrapper>
      </Startlink>
    </>
  );
}
