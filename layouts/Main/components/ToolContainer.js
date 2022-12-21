import styled from 'styled-components';

const StyledToolContainer = styled.div`
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 80px;
  position: absolute;
  width: 300px;
`;

const ToolContainer = ({ children }) => {
  return <StyledToolContainer>{children}</StyledToolContainer>;
};

export default ToolContainer;
