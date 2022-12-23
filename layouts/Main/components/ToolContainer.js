import styled from 'styled-components';

const StyledToolContainer = styled.div`
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: ${({ theme }) => theme.helpers.getRem(80)};
  position: absolute;
  width: ${({ theme }) => theme.helpers.getRem(300)};
  padding: ${({ theme }) => theme.helpers.getSpacing(2)};
`;

const ToolContainer = ({ children }) => {
  return <StyledToolContainer>{children}</StyledToolContainer>;
};

export default ToolContainer;
