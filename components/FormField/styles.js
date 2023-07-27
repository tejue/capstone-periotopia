import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
`;

export const StyledLegend = styled.legend`
  margin-top: 20px;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const StyledLabel = styled.label`
  text-align: center;
  line-height: 1.3;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const StyledRadioLabel = styled.label`
  line-height: 1.3;
  font-weight: 100;
`;

export const StyledFormField = styled.div`
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  padding: 15px;
  margin: 10px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  background-color: var(--background-color);
  color: var(--secondary-color-text);
  font-size: 1rem;
  width: 70px;
  font-weight: 100;
  border: solid thin var(--secondary-highlight-color);
  text-align: end;
`;
