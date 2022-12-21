import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme, spacing }) => theme.helpers.getSpacing(spacing)};
`;

const List = ({ children, ...rest }) => {
  return <StyledList {...rest}>{children}</StyledList>;
};

List.defaultProps = {
  spacing: 2,
};

export default List;
