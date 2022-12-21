import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.helpers.numberToRem(6)};
  background-color: ${({ theme, bgColor }) => theme.helpers.getColor(bgColor)};
  color: ${({ isDark }) => (isDark ? 'white' : 'currentColor')};
  padding: ${({ theme, p }) => theme.helpers.getSpacing(p)};
  ${({ theme, hasBorder }) =>
    hasBorder &&
    css`
      border: ${theme.helpers.numberToRem(1)} solid ${theme.pallete.grayLight};
    `}
  ${({ theme, hasShadow }) =>
    hasShadow &&
    css`
      box-shadow: 0 0 ${theme.helpers.numberToRem(20)} ${theme.pallete.grayLight};
    `}
`;

const Card = ({ children, component, ...rest }) => {
  return (
    <StyledCard as={component} {...rest}>
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  component: 'div',
  bgColor: 'body',
  isDark: false,
  hasShadow: false,
  hasBorder: false,
  p: 2,
};

export default Card;
