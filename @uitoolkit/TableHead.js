import styled, { css } from 'styled-components';

const StyledTableHead = styled.thead`
  ${({ theme, sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: ${theme.helpers.numberToRem(sticky)};
    `}
`;

const TableHead = ({ children, ...rest }) => {
  return <StyledTableHead {...rest}>{children}</StyledTableHead>;
};

TableHead.defaultProps = {
  sticky: 0,
};

export default TableHead;
