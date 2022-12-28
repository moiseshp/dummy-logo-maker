import styled from 'styled-components';

const StyledSidebar = styled.aside`
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  width: ${({ theme }) => theme.helpers.getRem(380)};
  box-sizing: content-box;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.03);
`;

const Sidebar = ({ children }) => {
  return <StyledSidebar>{children}</StyledSidebar>;
};

export default Sidebar;
