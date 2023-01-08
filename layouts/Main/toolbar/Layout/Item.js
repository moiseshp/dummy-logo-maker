import styled, { css } from 'styled-components';
import { getDirection, getFlexDirection } from 'utils/layout';

const StyledLayoutItem = styled.div`
  position: relative;
  height: ${({ theme }) => theme.helpers.getRem(120)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getRem(10)};
  direction: ${({ variant }) => getDirection(variant)};
  flex-direction: ${({ variant }) => getFlexDirection(variant)};
`;

const StyledIcon = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray};
  width: ${({ theme }) => theme.helpers.getRem(50)};
  height: ${({ theme }) => theme.helpers.getRem(50)};
  border: ${({ theme }) => `${theme.helpers.getRem(1)} solid ${theme.palette.lightGray}`};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGray};
  width: ${({ theme }) => theme.helpers.getRem(120)};
  height: ${({ theme }) => theme.helpers.getRem(24)};
  border: ${({ theme }) => `${theme.helpers.getRem(1)} solid ${theme.palette.lightGray}`};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

const LayoutItem = ({ variant }) => {
  return (
    <StyledLayoutItem>
      <StyledBox variant={variant}>
        <StyledIcon />
        <StyledLogo />
      </StyledBox>
    </StyledLayoutItem>
  );
};

export default LayoutItem;
