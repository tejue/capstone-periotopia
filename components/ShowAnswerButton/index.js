import IconSVG from "../IconSVG";
import { Button, ButtonWrapper, IconWrapper } from "./styles";

export default function ShowAnswerButton({ type, onClick }) {
  return (
    <>
      <ButtonWrapper>
        <Button type={type} onClick={onClick}>
          .
        </Button>
        <IconWrapper>
          <IconSVG
            icon="next"
            color={`var(--primary-highlight-color)`}
            size={43}
          />
        </IconWrapper>
      </ButtonWrapper>
    </>
  );
}
