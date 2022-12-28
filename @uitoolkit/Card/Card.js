import styled, { css } from 'styled-components';
import Box from '@uitoolkit/Box';

const StyledCard = styled(Box)`
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  /* background-color: ${({ theme, bgColor }) => theme.helpers.getColor(bgColor)}; */
  color: ${({ isDark }) => (isDark ? 'white' : 'currentColor')};
  padding: ${({ theme, p }) => theme.helpers.getSpacing(p)};
  ${({ theme, hasBorder }) =>
    hasBorder &&
    css`
      border: ${theme.helpers.getRem(1)} solid ${theme.pallete.lightGray};
    `}
  ${({ theme, hasShadow }) =>
    hasShadow &&
    css`
      box-shadow: 0 0 ${theme.helpers.getRem(20)} ${theme.pallete.lightGray};
    `}
`;

const Card = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

Card.defaultProps = {
  bgColor: 'transparent',
  isDark: false,
  hasShadow: false,
  hasBorder: false,
  p: 2,
};

export default Card;
