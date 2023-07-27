import {
  IntroHeading,
  IntroWrapper,
  Footnote,
  Startlink,
  IconWrapper,
  IconWrapperClick,
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

          <IconWrapper>
            <IconSVG icon="water" color="#fb5c5b" size={150} />
          </IconWrapper>
          <IconWrapperClick>
            <IconSVG
              icon="click"
              color={`var(--primary-highlight-color)`}
              size={70}
            />
          </IconWrapperClick>
        </IntroWrapper>
      </Startlink>
    </>
  );
}
