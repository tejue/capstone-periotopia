import {
  StyledPeriotopiaIndex,
  StyledIndex,
  StyledIndexFilled,
} from "./styles";

export default function PeriotopiaIndex({ periotopiaIndex }) {
  return (
    <StyledPeriotopiaIndex>
      <StyledIndex>
        <StyledIndexFilled width={periotopiaIndex} />
      </StyledIndex>
    </StyledPeriotopiaIndex>
  );
}
