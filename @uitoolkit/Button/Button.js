/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.bolder};
  vertical-align: middle;
  border-radius: ${({ theme, isRounded, size }) =>
    isRounded ? theme.button.size[size] : theme.shape.borderRadius};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 0 ${({ theme, size }) => theme.helpers.getRem(size === 'small' ? 10 : 20)};
  height: ${({ theme, size }) => theme.button.size[size]};
  line-height: ${({ theme, size }) => theme.button.size[size]};
  font-size: ${({ theme, size }) =>
    theme.typography.variants[size === 'small' ? 'caption' : 'body1']};
  ${({ theme, color, variant }) => css`
    ${variant === 'contained' &&
    css`
      background-color: ${theme.helpers.getColor(color)};
      color: white;
      & svg {
        fill: white;
      }
    `}
    ${variant !== 'text' &&
    css`
      border: ${theme.helpers.getRem(1)} solid
        ${theme.helpers.getColor(color) || theme.palette.textPrimary};
    `}
    ${variant !== 'contained' &&
    css`
      color: ${theme.helpers.getColor(color)};
      & svg {
        fill: ${theme.helpers.getColor(color)};
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
      margin-${marginDirection}: ${theme.helpers.getRem(10)};
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
