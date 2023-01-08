import styled from 'styled-components';

const StyledMain = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${({ theme }) => theme.helpers.getRem(380)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
