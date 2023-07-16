export default function InputNumber({
  id,
  name,
  min,
  max,
  onChange,
  value,
  ...inputProps
}) {
  return (
    <input
      id={id}
      name={name}
      type="number"
      max={max}
      min={min}
      step="1"
      required
      value={value}
      onChange={onChange}
      {...inputProps}
    />
  );
}
