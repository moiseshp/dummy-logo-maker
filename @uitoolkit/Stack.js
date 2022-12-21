import styled, { css } from 'styled-components';

const StyledStack = styled.section`
  ${({ theme, spacing, mt, mb, p, direction, justifyContent }) =>
    css`
      display: flex;
      width: 100%;
      flex-direction: ${direction};
      margin-top: ${theme.helpers.getSpacing(mt)};
      margin-bottom: ${theme.helpers.getSpacing(mb)};
      gap: ${theme.helpers.getSpacing(spacing)};
      padding: ${theme.helpers.getSpacing(p)};
      ${justifyContent &&
      css`
        justify-content: ${justifyContent};
      `};
    `}
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
  spacing: 1,
  direction: 'column',
  mt: 0,
  mb: 0,
  p: 0,
};

export default Stack;
