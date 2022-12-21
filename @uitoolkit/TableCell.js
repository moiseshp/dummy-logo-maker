import styled, { css } from 'styled-components';

const StyledTableCell = styled.td`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ theme }) => theme.typography.variants.caption};
  font-weight: ${({ theme, fontWeight }) => theme.typography[fontWeight]};
  color: ${({ theme, color }) => theme.helpers.getColor(color)};
  ${({ isTruncateText }) =>
    isTruncateText &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      max-width: 0;
    `};
`;

const TableCell = ({ children, ...rest }) => {
  return <StyledTableCell {...rest}>{children}</StyledTableCell>;
};

TableCell.defaultProps = {
  textAlign: 'center',
  isTruncateText: false,
  fontWeight: 'regular',
  color: 'textSecondary',
};

export default TableCell;
