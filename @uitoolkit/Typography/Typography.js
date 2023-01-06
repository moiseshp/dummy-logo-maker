import styled, { css } from 'styled-components';

const StyledTypography = styled.p`
  font-size: ${({ theme, variant }) => theme.typography.variants[variant] || 'inherit'};
  color: ${({ theme, color }) => theme.helpers.getColor(color)};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ theme, fontWeight }) => theme.typography[fontWeight]};
  text-transform: ${({ textTransform }) => textTransform};
  margin: 0;
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
  component: 'p',
  color: 'inherit',
  textAlign: 'inherit',
  fontWeight: 'inherit',
  textTransform: 'inherit',
  mt: 0,
  mb: 1,
};

export default Typography;
