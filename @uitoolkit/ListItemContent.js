import styled from 'styled-components';

const StyledListItemContent = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.helpers.getSpacing(2)};
`;

const ListItemContent = ({ children, ...rest }) => {
  return <StyledListItemContent {...rest}>{children}</StyledListItemContent>;
};

ListItemContent.defaultProps = {
  justifyContent: 'center',
};

export default ListItemContent;
