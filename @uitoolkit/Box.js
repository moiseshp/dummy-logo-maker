import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledBox = styled.div`
  ${({
    theme,
    bgColor,
    color,
    width,
    maxWidth,
    height,
    display,
    zIndex,
    position,
    top,
    right,
    bottom,
    left,
    alignItems,
    justifyContent,
    borderRadius,
    textAlign,
    flexGrow,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    p,
    m,
  }) =>
    css`
      ${bgColor && `background-color: ${theme.helpers.getColor(bgColor)};`}
      ${color && `color: ${theme.helpers.getColor(color)};`}
      ${textAlign && `text-align: ${textAlign};`}
      ${width && `width: ${theme.helpers.numberToRem(width)};`}
      ${maxWidth && `max-width: ${theme.helpers.numberToRem(maxWidth)};`}
      ${borderRadius && `border-radius: ${theme.helpers.numberToRem(borderRadius)};`}
      ${height && `height: ${theme.helpers.numberToRem(height)};`}
      ${display && `display: ${display};`}
      ${justifyContent && `justify-content: ${justifyContent};`}
      ${alignItems && `align-items: ${alignItems};`}
      ${flexGrow && `flex-grow: ${flexGrow};`}
      ${display && `display: ${display};`}
      ${zIndex && `z-index: ${zIndex};`}
      ${position &&
      css`
        position: ${position};
        top: ${theme.helpers.numberToRem(top) || 'initial'};
        right: ${theme.helpers.numberToRem(right) || 'initial'};
        bottom: ${theme.helpers.numberToRem(bottom) || 'initial'};
        left: ${theme.helpers.numberToRem(left) || 'initial'};
      `}
      ${p
        ? css`
            padding: ${theme.helpers.getSpacing(p)};
          `
        : css`
            padding-top: ${theme.helpers.getSpacing(pt)};
            padding-right: ${theme.helpers.getSpacing(pr)};
            padding-bottom: ${theme.helpers.getSpacing(pb)};
            padding-left: ${theme.helpers.getSpacing(pl)};
          `}
      ${m
        ? css`
            margin: ${theme.helpers.getSpacing(m)};
          `
        : css`
            margin-top: ${theme.helpers.getSpacing(mt)};
            margin-right: ${theme.helpers.getSpacing(mr)};
            margin-bottom: ${theme.helpers.getSpacing(mb)};
            margin-left: ${theme.helpers.getSpacing(ml)};
          `}
    `}
`;

const Box = forwardRef(({ id, children, component, ...rest }, ref) => (
  <StyledBox data-testid={id} as={component} {...rest} ref={ref}>
    {children}
  </StyledBox>
));

Box.defaultProps = {
  component: 'div',
  m: 0,
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  p: 0,
  pt: 0,
  pr: 0,
  pb: 0,
  pl: 0,
};

export default Box;
