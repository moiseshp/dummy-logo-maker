/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledBox = styled.div`
  background-color: ${({ theme, bgColor }) => theme.helpers.getColor(bgColor)};
  color: ${({ theme, color }) => theme.helpers.getColor(color)};
  text-align: ${({ textAlign }) => textAlign};
  border-radius: ${({ theme, borderRadius }) => theme.helpers.getRem(borderRadius)};
  width: ${({ theme, width }) => theme.helpers.getRem(width)};
  max-width: ${({ theme, maxWidth }) => theme.helpers.getRem(maxWidth)};
  height: ${({ theme, height }) => theme.helpers.getRem(height)};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-grow: ${({ flexGrow }) => flexGrow};
  z-index: ${({ zIndex }) => zIndex};
  ${({ theme, p }) =>
    p
      ? css`
          padding: ${theme.helpers.getSpacing(p)} !important;
        `
      : css`
          padding-top: ${({ theme, pt }) => theme.helpers.getSpacing(pt)};
          padding-right: ${({ theme, pr }) => theme.helpers.getSpacing(pr)};
          padding-bottom: ${({ theme, pb }) => theme.helpers.getSpacing(pb)};
          padding-left: ${({ theme, pl }) => theme.helpers.getSpacing(pl)};
        `}
  ${({ theme, m }) =>
    m
      ? css`
          margin: ${theme.helpers.getSpacing(m)} !important;
        `
      : css`
          margin-top: ${({ theme, mt }) => theme.helpers.getSpacing(mt)};
          margin-right: ${({ theme, mr }) => theme.helpers.getSpacing(mr)};
          margin-bottom: ${({ theme, mb }) => theme.helpers.getSpacing(mb)};
          margin-left: ${({ theme, ml }) => theme.helpers.getSpacing(ml)};
        `}
  ${({ theme, position, top, right, bottom, left }) => {
    if (position) {
      return css`
        position: ${position};
        top: ${theme.helpers.getRem(top) || 'auto'};
        right: ${theme.helpers.getRem(right) || 'auto'};
        bottom: ${theme.helpers.getRem(bottom) || 'auto'};
        left: ${theme.helpers.getRem(left) || 'auto'};
      `;
    }
  }}
`;

const Box = forwardRef(({ id, children, component, ...rest }, ref) => (
  <StyledBox data-testid={id} as={component} {...rest} ref={ref}>
    {children}
  </StyledBox>
));

Box.defaultProps = {
  component: 'div',
  bgColor: 'transparent',
  color: 'inherit',
  textAlign: 'start',
  borderRadius: 0,
  width: 'auto',
  maxWidth: 'auto',
  height: 'auto',
  display: 'block',
  justifyContent: 'normal',
  alignItems: 'normal',
  flexGrow: 0,
  zIndex: 'auto',
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  pt: 0,
  pr: 0,
  pb: 0,
  pl: 0,
};

export default Box;
