import styled from 'styled-components';

const StyledMenuBar = styled.nav`
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 80px;
  border-right: 1px solid #eee;
`;

const MenuBar = ({ children }) => {
  return <StyledMenuBar>{children}</StyledMenuBar>;
};

export default MenuBar;
