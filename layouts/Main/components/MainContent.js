import styled from 'styled-components';

const StyledMainContent = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = ({ children }) => {
  return <StyledMainContent>{children}</StyledMainContent>;
};

export default MainContent;
