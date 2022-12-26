import styled, { css } from 'styled-components';

const StyledTypography = styled.span`
  font-size: ${({ theme, variant }) => theme.typography.variants[variant]};
  color: ${({ theme, color }) => theme.helpers.getColor(color)};
  text-align: ${({ align }) => align};
  font-weight: ${({ theme, fontWeight }) => theme.typography[fontWeight]};
  text-transform: ${({ textTransform }) => textTransform};
  margin-top: ${({ theme, mt }) => theme.helpers.getSpacing(mt)};
  margin-bottom: ${({ theme, mb }) => theme.helpers.getSpacing(mb)};
  ${({ isTruncate }) =>
    isTruncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

const Typography = ({ children, component, ...rest }) => (
  <StyledTypography as={component} {...rest}>
    {children}
  </StyledTypography>
);

Typography.defaultProps = {
  variant: 'body1',
  component: 'p',
  color: 'inherit',
  align: 'inherit',
  fontWeight: 'inherit',
  textTransform: 'inherit',
  mt: 0,
  mb: 0,
};

export default Typography;
