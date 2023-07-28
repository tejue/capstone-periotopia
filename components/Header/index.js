import { StyledHeader, HeaderWrapper } from "./styles";

export default function Header({ children, rotation }) {
  return (
    <>
      <StyledHeader>
        <HeaderWrapper rotation={rotation}>{children}</HeaderWrapper>
      </StyledHeader>
    </>
  );
}
