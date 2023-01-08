import styled from 'styled-components';

const StyledMenuBar = styled.nav`
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.helpers.getRem(80)};
  border-right: ${({ theme }) => `${theme.helpers.getRem(1)} solid ${theme.palette.lightGray}`};
`;

const MenuBar = ({ children }) => {
  return <StyledMenuBar>{children}</StyledMenuBar>;
};

export default MenuBar;
