import styled from 'styled-components';

const StyledMenuItem = styled.div`
  width: ${({ theme }) => theme.helpers.getRem(80)};
  height: ${({ theme }) => theme.helpers.getRem(80)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.variants.caption};
  color: ${({ theme, isActive }) => (isActive ? theme.pallete.primary : 'currentColor')};
`;

const MenuItem = ({ children, ...rest }) => {
  return (
    <StyledMenuItem role="button" {...rest}>
      {children}
    </StyledMenuItem>
  );
};

export default MenuItem;
