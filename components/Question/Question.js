export default function Question({ id, question }) {
  return <label htmlFor={id}>{question}</label>;
}
