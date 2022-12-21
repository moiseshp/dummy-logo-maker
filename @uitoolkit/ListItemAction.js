import styled from 'styled-components';

const StyledListItemAction = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.helpers.getSpacing(2)};
`;

const ListItemAction = ({ children, ...rest }) => {
  return <StyledListItemAction>{children}</StyledListItemAction>;
};

export default ListItemAction;
