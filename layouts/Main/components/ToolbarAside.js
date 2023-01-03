import styled from 'styled-components';

const StyledToolbarAside = styled.div`
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: ${({ theme }) => theme.helpers.getRem(80)};
  position: absolute;
  width: ${({ theme }) => theme.helpers.getRem(300)};
  padding: 0 ${({ theme }) => theme.helpers.getSpacing(3)};
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: ${({ theme }) => `${theme.palette.disabled} ${theme.palette.lightGray}`};
  scrollbar-width: thin;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 ${({ theme }) => theme.helpers.getRem(6)} rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.helpers.getRem(10)};
    background-color: ${({ theme }) => theme.palette.lightGray};
  }
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.helpers.getRem(6)};
    height: ${({ theme }) => theme.helpers.getRem(6)};
    background-color: ${({ theme }) => theme.palette.disabled};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.helpers.getRem(10)};
    box-shadow: inset 0 0 ${({ theme }) => theme.helpers.getRem(6)} rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.palette.disabled};
  }
`;

const ToolContainer = ({ children }) => {
  return <StyledToolbarAside>{children}</StyledToolbarAside>;
};

export default ToolContainer;
