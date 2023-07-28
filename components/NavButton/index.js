import { NavButtonWrapper, IconWrapper, Button } from "./styles";
import IconSVG from "../IconSVG";

export default function NavButton({ onPrevPage, onNextPage }) {
  return (
    <>
      <NavButtonWrapper>
        <Button onClick={onPrevPage}>
          <IconWrapper>
            <IconSVG
              icon="prev"
              color={`var(--primary-highlight-color)`}
              size={43}
            />
          </IconWrapper>
        </Button>
        <Button onClick={onNextPage}>
          <IconWrapper>
            <IconSVG
              icon="next"
              color={`var(--primary-highlight-color)`}
              size={43}
            />
          </IconWrapper>
        </Button>
      </NavButtonWrapper>
    </>
  );
}
