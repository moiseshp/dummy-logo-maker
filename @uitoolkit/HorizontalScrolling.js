import styled from 'styled-components';

const StyledHorizontalScrolling = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: ${({ theme }) => theme.helpers.getSpacing(2)};
  z-index: 1;
  display: flex;
  width: 100%;
  gap: ${({ theme, spacing }) => theme.helpers.getSpacing(spacing)};
  background-color: ${({ theme, bgColor }) => theme.helpers.getColor(bgColor)};
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'static')};
  top: ${({ theme }) => theme.mixins.toolbar.minHeight};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HorizontalScrolling = ({ children, component, ...rest }) => {
  return (
    <StyledHorizontalScrolling as={component} {...rest}>
      {children}
    </StyledHorizontalScrolling>
  );
};

HorizontalScrolling.defaultProps = {
  component: 'div',
  bgColor: 'transparent',
  spacing: 1,
  isSticky: false,
};

export default HorizontalScrolling;
