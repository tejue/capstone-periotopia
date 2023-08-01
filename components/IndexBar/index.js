import { IndexBarContainer, IndexBackground, IndexFilling } from "./styles";

export default function IndexBar({ periotopiaIndex }) {
  return (
    <IndexBarContainer>
      <IndexBackground>
        <IndexFilling width={periotopiaIndex} />
      </IndexBackground>
    </IndexBarContainer>
  );
}
