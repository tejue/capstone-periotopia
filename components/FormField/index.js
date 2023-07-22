import styled from "styled-components";

const StyledLabel = styled.label`
  margin-top: 20px;
`;

const StyledFieldset = styled.fieldset`
  //border: none;
  display: flex;
  flex-direction: column;
`;

const StyledLegend = styled.legend`
  margin-top: 20px;
`;

const RadioButtonInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #333;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: red;
  }
`;

const RadioButtonLabel = styled.label`
  margin-left: 8px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

export default function FormField({
  type,
  options,
  onChange,
  formFieldId,
  question,
  name,
  placeholder,
  checked,
  disabled,
  //   ...inputProps
}) {
  return (
    <>
      {type === "number" && (
        <>
          <label htmlFor={formFieldId}>{question}</label>
          <input
            id={formFieldId}
            type="number"
            //   value={value}
            //   onChange={(e) => onChange(e.target.value)}
            //   {...inputProps}
            required
          />
        </>
      )}
      {type === "radio" && (
        <StyledFieldset>
          <StyledLegend>{question}</StyledLegend>
          {options.map((option) => (
            <RadioButtonLabel
              key={option.formFieldId}
              htmlFor={option.formFieldId}
            >
              <RadioButtonInput
                type="radio"
                id={option.formFieldId}
                name={name}
                value={option.value}
                checked={checked === option.value}
                onChange={onChange}
                // {...inputProps}
                required
                disabled={disabled}
              />
              {option.content}
            </RadioButtonLabel>
          ))}
        </StyledFieldset>
      )}
      {type === "select" && (
        <>
          <label htmlFor={formId}>{question}</label>
          <select
            id={formId}
            options={options}
            placeholder={placeholder}
            onChange={onChange}
            //   {...inputProps}
            required
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </>
      )}
      {/* {["select", "number", "radio"].indexOf(type) === -1 && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...inputProps}
        />
      )}  */}
    </>
  );
}
