import { forwardRef } from 'react';
import Card from 'components/commons/Card';
import styled from 'styled-components';

const StyledListItem = styled(Card)`
  min-height: ${({ theme }) => theme.helpers.numberToRem(65)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
`;

const ListItem = forwardRef(({ children, href, ...rest }, ref) => {
  return (
    <StyledListItem component="li" ref={ref} href={href} {...rest}>
      {children}
    </StyledListItem>
  );
});

ListItem.defaultProps = {
  p: 0,
};

export default ListItem;
