import styled, { css } from 'styled-components';

const StyledChip = styled.div`
  ${({ theme, color, variant, size, isRounded }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.shape.borderRadius};
    text-align: center;
    padding: 0 ${theme.helpers.numberToRem(size === 'small' ? 15 : 25)};
    height: ${theme.button.size[size]};
    line-height: ${theme.button.size[size]};
    font-weight: bold;
    vertical-align: middle;
    border: ${theme.helpers.numberToRem(1)} solid
      ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
    ${size === 'small' &&
    css`
      font-size: ${theme.typography.variants.caption};
    `}
    ${variant === 'contained' &&
    css`
      background-color: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
      color: ${color === 'todo-light-color' ? theme.pallete.textPrimary : 'white'};
      & svg {
        fill: ${color === 'todo-light-color' ? theme.pallete.textPrimary : 'white'};
      }
    `}
    ${variant !== 'contained' &&
    css`
      color: ${theme.helpers.getColor(color) || color || theme.pallete.textPrimary};
    `}
    ${isRounded &&
    css`
      border-radius: ${theme.button.size[size]};
    `}
  `}
`;

const Chip = ({ children, href, component, startIcon, endIcon, ...rest }) => (
  <StyledChip as={component} {...rest}>
    {children}
  </StyledChip>
);

Chip.defaultProps = {
  component: 'div',
  isRounded: false,
  size: 'medium',
  variant: 'contained',
};

export default Chip;
