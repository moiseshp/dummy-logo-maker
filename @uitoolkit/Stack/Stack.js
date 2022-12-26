import styled from 'styled-components';

const StyledStack = styled.section`
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
  margin-top: ${({ theme, mt }) => theme.helpers.getSpacing(mt)};
  margin-bottom: ${({ theme, mb }) => theme.helpers.getSpacing(mb)};
  gap: ${({ theme, spacing }) => theme.helpers.getSpacing(spacing)};
  padding: ${({ theme, p }) => theme.helpers.getSpacing(p)};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const Stack = ({ children, component, ...rest }) => {
  return (
    <StyledStack as={component} {...rest}>
      {children}
    </StyledStack>
  );
};

Stack.defaultProps = {
  children: [],
  component: 'section',
  spacing: 2,
  direction: 'column',
  justifyContent: 'normal',
  mt: 0,
  mb: 0,
  p: 0,
};

export default Stack;
