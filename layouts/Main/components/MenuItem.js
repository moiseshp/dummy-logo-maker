import styled from 'styled-components';

const StyledMenuItem = styled.div`
  cursor: pointer;
  width: ${({ theme }) => theme.helpers.getRem(80)};
  height: ${({ theme }) => theme.helpers.getRem(80)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.variants.caption};
  color: ${({ theme, color, isActive }) => theme.helpers.getColor(isActive ? 'secondary' : color)};
  font-weight: ${({ theme, isActive }) => theme.typography[isActive ? 'bolder' : 'regular']};
  &:hover {
    color: ${({ theme }) => theme.palette.secondary};
  }
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
  isActive: false,
};

export default MenuItem;
