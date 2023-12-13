import styled, { css } from "styled-components";

const HSButton = ({ variant, size, shape, children }) => {
  console.log(variant, size, shape, children);
  return <Button variant={variant}>{children}</Button>;
};

export default HSButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["yellow"]};
  `,
};

const sizeCSS = {
  small: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
`;
