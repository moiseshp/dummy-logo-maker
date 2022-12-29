import Box from '@uitoolkit/Box';
import Typography from '@uitoolkit/Typography';
import styled, { css } from 'styled-components';
import { getFlexDirection } from './getFlexDirection';

const StyledLayoutItem = styled.div`
  position: relative;
  height: ${({ theme }) => theme.helpers.getRem(150)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.helpers.getRem(10)};
  direction: ${({ variant }) => (variant === 'Icon-Left' ? 'ltr' : 'rtl')};
  flex-direction: ${({ variant }) => getFlexDirection(variant)};
`;

const StyledIcon = styled.div`
  background-color: ${({ theme }) => theme.pallete.lightGray};
  width: ${({ theme }) => theme.helpers.getRem(50)};
  height: ${({ theme }) => theme.helpers.getRem(50)};
  border: ${({ theme }) => `${theme.helpers.getRem(1)} solid ${theme.pallete.lightGray}`};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.pallete.lightGray};
  width: ${({ theme }) => theme.helpers.getRem(120)};
  height: ${({ theme }) => theme.helpers.getRem(24)};
  border: ${({ theme }) => `${theme.helpers.getRem(1)} solid ${theme.pallete.lightGray}`};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;

const LayoutItem = ({ variant }) => {
  return (
    <StyledLayoutItem>
      <StyledBox variant={variant}>
        <StyledIcon />
        <StyledLogo />
      </StyledBox>
      <Box position="absolute" top={8} left={8}>
        <Typography variant="caption" color="disabled">
          {variant.replace('-', ' ')}
        </Typography>
      </Box>
    </StyledLayoutItem>
  );
};

export default LayoutItem;
