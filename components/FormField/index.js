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

const StyledInput = styled.input`
  gap: 0;
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
            <StyledLabel key={option.formFieldId} htmlFor={option.formFieldId}>
              <StyledInput
                type="radio"
                id={option.formFieldId}
                name={name}
                value={option.value}
                checked={checked === option.value}
                onChange={onChange}
                // {...inputProps}
                required
              />
              {option.content}
            </StyledLabel>
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
