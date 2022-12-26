import styled from 'styled-components';

const StyledToolbarAside = styled.div`
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: ${({ theme }) => theme.helpers.getRem(80)};
  position: absolute;
  width: ${({ theme }) => theme.helpers.getRem(300)};
  padding: ${({ theme }) => theme.helpers.getSpacing(3)};
  overflow-y: auto;
  overflow-x: hidden;
`;

const ToolContainer = ({ children }) => {
  return <StyledToolbarAside>{children}</StyledToolbarAside>;
};

export default ToolContainer;
