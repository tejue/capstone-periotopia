import styled from "styled-components";

const StyledQuestionLabel = styled.label`
  margin-top: 20px;
`;

export default function Question({ id, question }) {
  return <StyledQuestionLabel htmlFor={id}>{question}</StyledQuestionLabel>;
}
