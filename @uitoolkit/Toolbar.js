import styled from 'styled-components';

const StyledToolbar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const Toolbar = ({ children, component, ...rest }) => {
  return (
    <StyledToolbar as={component} {...rest}>
      {children}
    </StyledToolbar>
  );
};

Toolbar.defaultProps = {
  component: 'div',
  justifyContent: 'flex-start',
};

export default Toolbar;
