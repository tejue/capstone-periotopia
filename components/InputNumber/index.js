export default function InputNumber({ id, name, min, max, onChange, value }) {
  //const defaultValue = value !== undefined ? value : "";

  return (
    <input
      id={id}
      name={name}
      type="number"
      max={max}
      step="1"
      required
      value={value}
      onChange={onChange}
    />
  );
}
