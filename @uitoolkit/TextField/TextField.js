import { useState } from 'react';
import styled, { css } from 'styled-components';
import Box from '../Box';
const HEIGHT = 50; // move to basteTheme with size variants: normal and small;

const StyledTextField = styled.div`
  display: inline-flex;
  position: relative;
  min-width: ${({ fullWidth }) => (fullWidth ? '100%' : 0)};
  border: 0;
  vertical-align: top;
  height: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
  box-sizing: border-box;
`;

const StyleFieldset = styled.fieldset`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border-width: ${({ theme }) => theme.helpers.getRem(1)};
  border-style: solid;
  overflow: hidden;
  min-width: 0%;
  border-color: ${({ theme, isFocus }) => theme.pallete[isFocus ? 'primary' : 'textSecondary']};
  margin: 0;
`;

const StyledInput = styled.input`
  border: 0;
  box-sizing: border-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0;
  width: 100%;
  animation-duration: 10ms;
  padding-left: ${({ theme, startIcon }) => theme.helpers.getRem(startIcon ? 0 : 15)};
  padding-right: ${({ theme, endIcon }) => theme.helpers.getRem(endIcon ? 0 : 15)};
  line-height: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
  font-size: ${({ theme }) => theme.typography.variants.body1};
  color: inherit;
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.variants.body1};
  font-weight: ${({ theme }) => theme.typography.regular};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - ${({ theme }) => theme.helpers.getRem(24)});
  pointer-events: none;
  box-sizing: content-box;
  position: absolute;
  transition: 0.2s;
  left: 0;
  top: 0;
  z-index: 1;
  padding-left: ${({ theme, startIcon }) => theme.helpers.getRem(startIcon ? 40 : 5)};
  padding-right: ${({ theme, endIcon }) => theme.helpers.getRem(endIcon ? 40 : 5)};
  color: ${({ theme, isFocus }) => theme.pallete[isFocus ? 'primary' : 'textSecondary']};
  transform: translate(10px, 15px) scale(1);
  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate(10px, -6px) scale(1);
      pointer-events: auto;
      user-select: none;
      background-color: ${({ theme }) => theme.pallete.body};
      font-size: ${({ theme }) => theme.typography.variants.caption};
      padding: 0 ${({ theme }) => theme.helpers.getRem(5)};
    `}
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
  height: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
`;

const TextField = ({ label, value: initValue, fullWidth, startIcon, endIcon, onChange }) => {
  const [value, setValue] = useState(initValue);
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = (e) => {
    if (e.type === 'focus') {
      setIsFocus(true);
      return;
    }
    setIsFocus(false);
  };
  const handleChange = (event) => {
    const { value } = event?.target;
    setValue(value);
    onChange(value);
  };
  return (
    <StyledTextField fullWidth={fullWidth}>
      <StyledLabel
        isActive={value || isFocus}
        isFocus={isFocus}
        startIcon={Boolean(startIcon)}
        endIcon={Boolean(endIcon)}
      >
        {label}
      </StyledLabel>
      <Box display="flex" alignItems="center" style={{ flex: '2 1 auto' }}>
        {startIcon && <StyledIcon>{startIcon}</StyledIcon>}
        <StyledInput
          defaultValue={value}
          onFocus={handleFocus}
          onBlur={handleFocus}
          onChange={handleChange}
          startIcon={Boolean(startIcon)}
          endIcon={Boolean(endIcon)}
        />
        {endIcon && <StyledIcon>{endIcon}</StyledIcon>}
      </Box>
      <StyleFieldset isFocus={isFocus} />
    </StyledTextField>
  );
};

TextField.defaultProps = {
  onChange: () => {},
  fullWidth: false,
};

export default TextField;
