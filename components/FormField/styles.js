import styled from "styled-components";

export const StyledLabel = styled.label`
  margin-top: 20px;
`;

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
  position: relative;
`;
