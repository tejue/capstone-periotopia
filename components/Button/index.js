import { basicButtonStyle, linkButtonStyle, StyledButton } from "./styles";
import Link from "next/link";

export default function Button({ children, href, ...restProps }) {
  const isLink = !!href;

  return isLink ? (
    <Link href={href}>
      <StyledButton isLink {...restProps}>
        {children}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton {...restProps}>{children}</StyledButton>
  );
}
