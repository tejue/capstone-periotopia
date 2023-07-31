import { StyledHeader, HeaderWrapper } from "./styles";

export default function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <HeaderWrapper>{children}</HeaderWrapper>
      </StyledHeader>
    </>
  );
}
