import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  ${({ theme, color, variant, size, isRounded, fullWidth }) => css`
    display: ${fullWidth ? 'block' : 'inline-flex'};
    align-items: center;
    justify-content: center;
    border-radius: ${theme.shape.borderRadius};
    text-align: center;
    padding: 0 ${theme.helpers.numberToRem(size === 'small' ? 15 : 25)};
    height: ${theme.button.size[size]};
    line-height: ${theme.button.size[size]};
    font-weight: bold;
    vertical-align: middle;
    ${fullWidth && 'width: 100%;'}
    ${size === 'small' && `font-size: ${theme.typography.variants.caption};`}
    ${variant === 'contained' &&
    css`
      background-color: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
      color: ${color === 'todo-light-color' ? theme.pallete.textPrimary : 'white'};
      & svg {
        fill: ${color === 'todo-light-color' ? theme.pallete.textPrimary : 'white'};
      }
    `}
    ${variant !== 'text' &&
    css`
      border: ${theme.helpers.numberToRem(1)} solid
        ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
    `}
    ${variant !== 'contained' &&
    css`
      color: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
      & svg {
        fill: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
      }
    `}
    ${isRounded &&
    css`
      border-radius: ${theme.button.size[size]};
    `}
  `}
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
