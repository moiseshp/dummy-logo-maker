import styled, { css } from 'styled-components';

const StyledMenuItem = styled.div`
  width: ${({ theme }) => theme.helpers.getRem(80)};
  height: ${({ theme }) => theme.helpers.getRem(80)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.variants.caption};
  color: ${({ theme, color }) => theme.helpers.getColor(color)};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.pallete.textPrimary};
  }
  ${({ theme, isActive }) => {
    if (isActive) {
      return css`
        color: ${theme.pallete.primary};
        font-weight: ${theme.typography.bolder};
        position: relative;
        &:after {
          content: '';
          position: absolute;
          background-color: ${theme.pallete.primary};
          width: ${theme.helpers.getRem(2)};
          height: 24%;
          right: 0;
        }
      `;
    }
  }}
`;

const MenuItem = ({ children, ...rest }) => {
  return (
    <StyledMenuItem role="button" {...rest}>
      {children}
    </StyledMenuItem>
  );
};

MenuItem.defaultProps = {
  color: 'inherit',
};

export default MenuItem;
