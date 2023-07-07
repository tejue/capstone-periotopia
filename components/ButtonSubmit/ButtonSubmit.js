export default function ButtonSubmit({ onSubmit }) {
  return (
    <>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}
