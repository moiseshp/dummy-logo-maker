import styled from 'styled-components';

const StyledLogoBox = styled.div`
  /* border: 1px solid #eee; */
  /* width: 500px;
  height: 500px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.05);
`;

const LogoBox = ({ children }) => {
  return <StyledLogoBox>{children}</StyledLogoBox>;
};

export default LogoBox;
