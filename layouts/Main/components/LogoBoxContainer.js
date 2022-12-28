import styled from 'styled-components';

const StyledLogoBoxContainer = styled.main`
  /* width: 500px; */
  /* height: 500px; */
  /* background-color: white; */
  /* border-radius: 8px; */
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.03);
`;

const LogoBoxContainer = ({ children }) => {
  return <StyledLogoBoxContainer>{children}</StyledLogoBoxContainer>;
};

export default LogoBoxContainer;
