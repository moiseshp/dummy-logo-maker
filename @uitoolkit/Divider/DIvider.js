import styled from 'styled-components';

const StyledDivider = styled.hr`
  border-style: solid;
  background: none;
  border-width: ${({ theme }) => theme.helpers.getRem(1)} 0 0 0;
  border-color: ${({ theme, color }) => theme.helpers.getColor(color)};
  margin: ${({ theme, my }) => theme.helpers.getSpacing(my)} 0;
`;

const Divider = ({ ...rest }) => {
  return <StyledDivider {...rest} />;
};

Divider.defaultProps = {
  color: 'disabled',
  my: 0,
};

export default Divider;
