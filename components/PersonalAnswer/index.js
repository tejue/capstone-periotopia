import styled from "styled-components";

const StyledPersonalAnswer = styled.section`
  background-color: lightcoral;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
`;

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
  const acceptableValue = year >= 0 && today >= 0 && life >= 0;

  return acceptableValue ? (
    <>
      <StyledPersonalAnswer>
        <p>{personalAnswerText}</p>
        <p>
          {year}
          <br />
          <small>{unit} im Jahr</small>
          <br />
          <small>{additionalYear}</small>
        </p>
        <p>
          <small>davon</small>
          <br />
          {today}
          <br />
          <small>{unit} bis heute</small>
          <br />
          <small>{additionalToday}</small>
        </p>
        <p>
          <small>und</small>
          <br />
          {life}
          <br />
          <small>{unit} in deinem Menstruations-Leben</small>
          <br />
          <small>{additionalLife}</small>
        </p>
      </StyledPersonalAnswer>
    </>
  ) : null;
}
