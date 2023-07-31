import { NavButtonWrapper, IconWrapper, Button } from "./styles";
import IconSVG from "../IconSVG";

export default function NavButton({
  onPrevPage,
  onNextPage,
  typePrevPage,
  typeNextPage,
}) {
  return (
    <>
      <NavButtonWrapper>
        <Button type={typePrevPage} onClick={onPrevPage}>
          {/* <Button onClick={onPrevPage}> */}
          <IconWrapper>
            <IconSVG
              icon="prev"
              color={`var(--primary-highlight-color)`}
              size={43}
            />
          </IconWrapper>
        </Button>
        <Button type={typeNextPage} onClick={onNextPage}>
          {/* <Button onClick={onNextPage}> */}
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
