import {
  StyledPersonalAnswer,
  AnswerText,
  StyledNumber,
  NumberSubtitle,
  StyledResultBlock,
} from "./styles";

export default function PersonalAnswer({
  personalAnswerText,
  unit,
  year,
  today,
  life,
  additionalYear,
  additionalToday,
  additionalLife,
}) {
  return (
    <>
      <StyledPersonalAnswer>
        <StyledResultBlock>
          <AnswerText>{personalAnswerText}</AnswerText>
          <StyledNumber>
            {year}
            <NumberSubtitle>{unit} im Jahr</NumberSubtitle>
            <NumberSubtitle>{additionalYear}</NumberSubtitle>
          </StyledNumber>
        </StyledResultBlock>
        <StyledResultBlock>
          <NumberSubtitle>davon</NumberSubtitle>
          <StyledNumber>
            {today}
            <NumberSubtitle>{unit} bis heute</NumberSubtitle>
            <NumberSubtitle>{additionalToday}</NumberSubtitle>
          </StyledNumber>
        </StyledResultBlock>
        <StyledResultBlock>
          <NumberSubtitle>und</NumberSubtitle>
          <StyledNumber>
            {life}
            <NumberSubtitle>{unit} in deinem Leben</NumberSubtitle>
            <NumberSubtitle>{additionalLife}</NumberSubtitle>
          </StyledNumber>
        </StyledResultBlock>
      </StyledPersonalAnswer>
    </>
  );
}
