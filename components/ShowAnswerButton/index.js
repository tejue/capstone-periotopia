import IconSVG from "../IconSVG";
import { Button, ButtonWrapper, IconWrapper } from "./styles";

export default function ShowAnswerButton() {
  return (
    <>
      <ButtonWrapper>
        <Button type="submit">.</Button>
        <IconWrapper>
          <IconSVG
            icon="next"
            color={`var(--primary-highlight-color)`}
            size={50}
          />
        </IconWrapper>{" "}
      </ButtonWrapper>
    </>
  );
}

{
}
