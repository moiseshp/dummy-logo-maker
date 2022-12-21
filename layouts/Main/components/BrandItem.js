import styled from 'styled-components';
import MenuItem from './MenuItem';

const StyledBrandItem = styled(MenuItem)`
  border-bottom: 1px solid #eee;
`;

const BrandItem = ({ children }) => {
  return <StyledBrandItem>{children}</StyledBrandItem>;
};

export default BrandItem;
