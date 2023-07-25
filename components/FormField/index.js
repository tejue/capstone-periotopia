import { StyledLabel, StyledFieldset, StyledLegend } from "./styles.js";

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
  onKeyDown,
}) {
  return (
    <>
      {type === "number" && (
        <>
          <label htmlFor={formFieldId}>{question}</label>
          <input
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
        </>
      )}
      {type === "radio" && (
        <StyledFieldset>
          <StyledLegend>{question}</StyledLegend>
          {options.map((option) => (
            <label key={option.formFieldId} htmlFor={option.formFieldId}>
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
            </label>
          ))}
        </StyledFieldset>
      )}
      {type === "select" && (
        <>
          <label htmlFor={formFieldId}>{question}</label>
          <select
            id={formFieldId}
            name={name}
            onChange={onChange}
            required
            //options={options}
          >
            {options.map((option) => (
              <option key={option.formFieldId} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </>
      )}
      {["select", "number", "radio"].indexOf(type) === -1 && (
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
    </>
  );
}
