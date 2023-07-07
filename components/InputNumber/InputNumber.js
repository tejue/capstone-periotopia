export default function InputNumber({ id, name, min, max }) {
  return (
    <input
      id={id}
      name={name}
      type="number"
      min={min}
      max={max}
      step="1"
      required
    />
  );
}
