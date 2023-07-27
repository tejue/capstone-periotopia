import styled from "styled-components";

export default function ShowAnswerButton() {
  return <Button type="submit">.</Button>;
}

export const Button = styled.button`
  background-color: var(--primary-highlight-color);
  color: var(--secondary-color-text);
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  //transition: background-color 0.3s ease;
  margin-top: 35px;

  &:hover {
    background-color: var(--primary-highlight-color);
  }

  &:active {
    background-color: #ffffff;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
`;
