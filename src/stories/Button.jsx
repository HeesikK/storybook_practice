import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import styled, { css } from "styled-components";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <BTN type="button" className={["storybook-button", `storybook-button--${size}`, mode].join(" ")} style={backgroundColor && { backgroundColor }} {...props}>
      {label}
    </BTN>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["mint"]};
    color: ${({ theme }) => theme.COLORS.white};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary["deep_mint"]};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary["purple"]};
    color: ${({ theme }) => theme.COLORS.white};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.secondary["deep_purple"]};
    }
  `,
};

const sizeCSS = {
  small: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    height: 40px;
    width: 100px;
  `,
  medium: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    height: 40px;
    width: 150px;
  `,
  large: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    height: 40px;
    width: 200px;
  `,
};

const shapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 24px;
  `,
};

const BTN = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
