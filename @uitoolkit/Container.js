import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: ${({ theme, verticalPadding }) =>
    `${theme.helpers.getSpacing(verticalPadding)} ${theme.helpers.getSpacing(2)}`};
`;

const Container = ({ children, component, ...rest }) => {
  return (
    <StyledContainer as={component} {...rest}>
      {children}
    </StyledContainer>
  );
};

Container.defaultProps = {
  component: 'div',
  verticalPadding: 2,
};

export default Container;
