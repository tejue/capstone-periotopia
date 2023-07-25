import styled, { css } from "styled-components";

export const basicButtonStyle = css`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const linkButtonStyle = css`
  text-decoration: none;
`;

export const StyledButton = styled.button`
  ${defaultButtonStyles}
  ${(props) => props.isLink && linkButtonStyles}
`;
