import styled from 'styled-components';

const StyledMenuItem = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => (isActive ? 'red' : 'black')};
  /* border: ${({ isActive }) => (isActive ? 1 : 0)}px solid #eee;
  border-right: ${({ isActive }) => (isActive ? 1 : 0)}px solid white; */
`;

const MenuItem = ({ children, ...rest }) => {
  return <StyledMenuItem {...rest}>{children}</StyledMenuItem>;
};

export default MenuItem;
