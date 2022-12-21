import styled, { css } from 'styled-components';

const StyledIcon = styled.svg`
  ${({ theme, color }) =>
    css`
      width: ${theme.icon.size};
      height: ${theme.icon.size};
      fill: ${theme.helpers.getColor(color)};
    `}
`;

const Icon = ({ children, ...rest }) => {
  return (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      {children}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  color: 'currentColor',
};

export default Icon;
