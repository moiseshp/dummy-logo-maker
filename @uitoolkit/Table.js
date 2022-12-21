import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  thead tr td {
    background-color: ${({ theme }) => theme.pallete.body};
    color: ${({ theme }) => theme.pallete.textSecondary};
    padding: ${({ theme }) => theme.mixins.spacing};
    margin: 0;
    border-bottom: ${({ theme }) =>
      `${theme.helpers.numberToRem(1)} solid ${theme.pallete.grayLight}`};
  }
  tbody tr td {
    padding: ${({ theme }) => theme.mixins.spacing};
    margin: 0;
    border-top: ${({ theme }) =>
      `${theme.helpers.numberToRem(1)} solid ${theme.pallete.grayLight}`};
  }
  tbody tr:first-child td {
    border-top-width: 0;
  }
  tbody tr:nth-child(odd) {
    background-color: #fafafa;
  }
`;

const Table = ({ children, ...rest }) => {
  return <StyledTable {...rest}>{children}</StyledTable>;
};

Table.defaultProps = {};

export default Table;
