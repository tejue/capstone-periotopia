import {
  StyledFormField,
  StyledFieldset,
  StyledLegend,
  StyledInputLabel,
  StyledRadioLabel,
  StyledInput,
  StyledSelect,
} from "./styles.js";

export default function FormField({
  question,
  type,
  formFieldId,
  name,
  min,
  max,
  step,
  value,
  options,
  checked,
  onChange,
  disabled,
}) {
  return (
    <>
      {type === "number" && (
        <StyledFormField>
          <StyledInputLabel htmlFor={formFieldId}>{question}</StyledInputLabel>
          <StyledInput
            type="number"
            id={formFieldId}
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            required
          />
        </StyledFormField>
      )}

      {type === "radio" && (
        <StyledFormField>
          <StyledFieldset>
            <StyledLegend>{question}</StyledLegend>
            {options.map((option) => (
              <StyledRadioLabel
                key={option.formFieldId}
                htmlFor={option.formFieldId}
              >
                <input
                  type="radio"
                  id={option.formFieldId}
                  name={name}
                  value={option.value}
                  checked={checked === option.value}
                  onChange={onChange}
                  disabled={disabled}
                  required
                />
                {option.content}
              </StyledRadioLabel>
            ))}
          </StyledFieldset>
        </StyledFormField>
      )}

      {type === "select" && (
        <StyledFormField>
          <StyledInputLabel htmlFor={formFieldId}>{question}</StyledInputLabel>
          <StyledSelect
            id={formFieldId}
            name={name}
            onChange={onChange}
            required
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </StyledSelect>
        </StyledFormField>
      )}

      {["select", "number", "radio"].indexOf(type) === -1 && (
        <input type="text" value={value} onChange={onChange} />
      )}
    </>
  );
}
