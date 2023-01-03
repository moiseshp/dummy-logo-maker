import { useState } from 'react';
import styled from 'styled-components';

const HEIGHT = 20;
const GAP = 8;

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  height: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
  position: relative;
  padding: ${({ theme }) => theme.helpers.getRem(GAP)} 0;
`;

const StyledTrack = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.lightGray};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  position: relative;
  overflow: hidden;
`;

const StlyedTrackSlider = styled.div`
  height: 100%;
  background-color: ${({ theme, disabled }) => theme.palette[disabled ? 'lightGray' : 'primary']};
  width: ${({ track }) => track}%;
`;

const StyledControl = styled.div`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
  bottom: 0;
  left: 0;
`;

const StyledControlSlider = styled.span`
  display: block;
  width: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
  height: ${({ theme }) => theme.helpers.getRem(HEIGHT)};
  background-color: ${({ theme, disabled }) => theme.palette[disabled ? 'lightGray' : 'primary']};
  border-radius: 100%;
  position: absolute;
  left: ${({ track }) => track}%;
`;

const StyledInput = styled.input`
  border: 0;
  box-sizing: border-box;
  background: none;
  margin: 0;
  height: 100%;
  padding: 0;
  white-space: nowrap;
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Slider = ({
  min,
  max,
  step,
  value: initValue,
  defaultValue,
  disabled,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState(initValue);
  const calculateTrackSlide = () => {
    const track = (100 / (max - min)) * step;
    return track * (value - min);
  };

  const handleChange = (event) => {
    setValue(event.target?.value);
    onChange(event);
  };
  return (
    <StyledSlider>
      <StyledTrack>
        <StlyedTrackSlider track={calculateTrackSlide} disabled={disabled} />
      </StyledTrack>
      <StyledControl>
        <StyledControlSlider track={calculateTrackSlide} disabled={disabled} />
      </StyledControl>
      <StyledInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />
    </StyledSlider>
  );
};

Slider.defaultProps = {
  onChange: () => {},
  disabled: false,
  min: 0,
  max: 0,
  step: 1,
};

export default Slider;
