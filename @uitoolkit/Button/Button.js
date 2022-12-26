/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  border-radius: ${({ theme, isRounded }) => (isRounded ? '100%' : theme.shape.borderRadius)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 0 ${({ theme, size }) => theme.helpers.getRem(size === 'small' ? 15 : 25)};
  height: ${({ theme, size }) => theme.button.size[size]};
  line-height: ${({ theme, size }) => theme.button.size[size]};
  font-size: ${({ theme, size }) =>
    theme.typography.variants[size === 'small' ? 'caption' : 'body1']};
  ${({ theme, color, variant }) => css`
    ${variant === 'contained' &&
    css`
      background-color: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
      color: ${color === 'light-color' ? theme.pallete.textPrimary : 'white'};
      & svg {
        fill: ${color === 'light-color' ? theme.pallete.textPrimary : 'white'};
      }
    `}
    ${variant !== 'text' &&
    css`
      border: ${theme.helpers.getRem(1)} solid
        ${theme.helpers.getColor(color) || theme.pallete.textPrimary};
    `}
    ${variant !== 'contained' &&
    css`
      color: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
      & svg {
        fill: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
      }
    `}
  `};
`;

const IconBox = styled.span`
  ${({ theme, marginDirection, size }) =>
    css`
      display: flex;
      align-items: center;
      height: ${theme.button.size[size]};
      line-height: ${theme.button.size[size]};
      margin-${marginDirection}: ${theme.helpers.numberToRem(10)};
    `}
`;

const Button = forwardRef(({ children, href, startIcon, endIcon, ...rest }, ref) => (
  <StyledButton ref={ref} href={href} {...rest}>
    {startIcon && (
      <IconBox marginDirection="right" {...rest}>
        {startIcon}
      </IconBox>
    )}
    {children}
    {endIcon && (
      <IconBox marginDirection="left" {...rest}>
        {endIcon}
      </IconBox>
    )}
  </StyledButton>
));

Button.defaultProps = {
  component: 'button',
  isRounded: false,
  size: 'medium',
  variant: 'text',
  fullWidth: false,
};

export default Button;
