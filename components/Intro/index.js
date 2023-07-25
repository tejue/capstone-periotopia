import {
  IntroHeading,
  IntroWrapper,
  IntrotextWrapper,
  Footnote,
  Startlink,
} from "./styles";

export default function Intro({
  introheading,
  introtext,
  footnote,
  href,
  starttext,
}) {
  return (
    <>
      <IntroHeading>{introheading}</IntroHeading>
      <IntroWrapper>
        <IntrotextWrapper>
          <p>{introtext}</p>
          <Footnote>{footnote}</Footnote>
        </IntrotextWrapper>
        <Startlink href={href}>{starttext}</Startlink>
      </IntroWrapper>
    </>
  );
}
