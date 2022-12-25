import styled, { css } from 'styled-components';

const StyledMenuItem = styled.div`
  width: ${({ theme }) => theme.helpers.getRem(80)};
  height: ${({ theme }) => theme.helpers.getRem(80)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.variants.caption};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.pallete.primary};
  }
  ${({ theme, isActive }) => {
    if (isActive) {
      return css`
        color: ${theme.pallete.primary};
        font-weight: ${theme.typography.bolder};
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

export default MenuItem;
