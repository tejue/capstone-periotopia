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
}) {
  return (
    <StyledPersonalAnswer>
      <p>{personalAnswerText}</p>
      <p>
        {year}
        <br />
        <small>{unit} im Jahr</small>
      </p>
      <p>
        <small>davon</small>
        <br />
        {today}
        <br />
        <small>{unit} bis heute</small>
      </p>
      <p>
        <small>und</small>
        <br />
        {life}
        <br />
        <small>{unit} in deinem Menstruations-Leben</small>
      </p>
    </StyledPersonalAnswer>
  );
}
