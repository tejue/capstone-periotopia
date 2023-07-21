import styled from "styled-components";

const StyledQuestion = styled.label`
  margin-top: 20px;
`;

export default function Questionnaire({
  label,
  type,
  options,
  value,
  onChange,
  onSubmit,
  formId,
  question,
  placeholder,
  //   ...inputProps
}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={formId}>{question}</label>
      {type === "number" && (
        <input
          id={formId}
          type="number"
          //   value={value}
          //   onChange={(e) => onChange(e.target.value)}
          //   {...inputProps}
          required
        />
      )}
      {type === "radio" && (
        <>
          {options.map((option) => (
            <label key={option.formId}>
              <input
                id={formId}
                type="radio"
                value={option.value}
                // checked={value === option.value}
                // onChange={(e) => onChange(e.target.value)}
                // {...inputProps}
                required
              />
              {option.content}
            </label>
          ))}
        </>
      )}
      {type === "select" && (
        <select
          id={formId}
          options={options}
          placeholder={placeholder}
          value={value}
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
      )}
      {/* {["select", "number", "radio"].indexOf(type) === -1 && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...inputProps}
        />
      )}  */}
    </form>
  );
}
