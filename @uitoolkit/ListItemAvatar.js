import styled from 'styled-components';

const StyledListItemAvatar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.helpers.getSpacing(2)};
`;

const ListItemMedia = ({ children, ...rest }) => {
  return <StyledListItemAvatar>{children}</StyledListItemAvatar>;
};

export default ListItemMedia;
