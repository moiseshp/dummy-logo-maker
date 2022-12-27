import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledIcon = styled.svg`
  ${({ theme, size, color }) =>
    css`
      width: ${theme.helpers.getRem(size)};
      height: ${theme.helpers.getRem(size)};
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
  size: 24,
};

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
