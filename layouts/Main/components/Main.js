import styled from 'styled-components';

const StyledMain = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${({ theme }) => theme.helpers.getRem(380)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledBanner = styled.div`
  display: block;
  background: cyan;
  padding: 10px 16px;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  & a {
    color: black;
  }
`;

const Banner = styled.div``;

const Main = ({ children }) => {
  return (
    <StyledMain>
      <StyledBanner>
        <span>Check out the new version of Dummy Logo creation at </span>
        <a href="https://dummylogo.vercel.app" target="_black">
          https://dummylogo.vercel.app/
        </a>
      </StyledBanner>
      <div>{children}</div>
    </StyledMain>
  );
};

export default Main;
