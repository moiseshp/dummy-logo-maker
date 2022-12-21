import styled, { css } from 'styled-components';

const StyledAppBar = styled.header`
  ${({ theme, height, position, bgColor, hasBorder, isDark, isBottom }) =>
    css`
      height: ${theme.helpers.numberToRem(height) || theme.mixins.toolbar.minHeight};
      z-index: ${theme.zIndex.appBar};
      width: 100%;
      position: ${position};
      left: 0;
      right: 0;
      border-bottom-width: ${hasBorder ? theme.helpers.numberToRem(1) : 0};
      border-color: ${theme.pallete.textDisabled};
      border-bottom-style: solid;
      ${isBottom ? 'bottom: 0;' : 'top: 0;'}
      ${bgColor &&
      css`
        background-color: ${theme.helpers.getColor(bgColor)};
      `}
      ${isDark &&
      css`
        color: white;
      `}
    `}
`;

const AppBar = ({ children, component, ...rest }) => {
  return (
    <StyledAppBar as={component} {...rest}>
      {children}
    </StyledAppBar>
  );
};

AppBar.defaultProps = {
  component: 'header',
  position: 'fixed',
  hasBorder: false,
  bgColor: 'transparent',
  isDark: false,
};

export default AppBar;
