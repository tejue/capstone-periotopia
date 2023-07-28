import {
  NavButtonWrapper,
  ButtonWrapperPrev,
  ButtonWrapperNext,
  IconWrapperPrev,
  IconWrapperNext,
  Button,
} from "./styles";
import IconSVG from "../IconSVG";

export default function NavButton({ onPrevPage, onNextPage }) {
  return (
    <>
      <NavButtonWrapper>
        <ButtonWrapperPrev>
          <Button onClick={onPrevPage}>.</Button>
          <IconWrapperPrev>
            <IconSVG
              icon="prev"
              color={`var(--primary-highlight-color)`}
              size={43}
            />
          </IconWrapperPrev>{" "}
        </ButtonWrapperPrev>

        <ButtonWrapperNext>
          <Button onClick={onNextPage}>.</Button>
          <IconWrapperNext>
            <IconSVG
              icon="next"
              color={`var(--primary-highlight-color)`}
              size={43}
            />
          </IconWrapperNext>{" "}
        </ButtonWrapperNext>
      </NavButtonWrapper>
    </>
  );
}
