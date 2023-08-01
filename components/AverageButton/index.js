import { Average } from "./styles";

export default function AverageButton({ onClick }) {
  return (
    <Average type="button" onClick={onClick}>
      &Oslash;
    </Average>
  );
}
