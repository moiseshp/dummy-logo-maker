/**
 * https://github.com/Wondermarin/react-color-palette#readme
 */
import { ColorPicker as ColorPickerRoot, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

const ColorPicker = ({ width, height, color, alpha, onChange }) => {
  const [colorPicker, setColorPicker] = useColor('hex', color);
  const handleChange = (color) => {
    setColorPicker(color);
    onChange(color);
  };
  return (
    <ColorPickerRoot
      width={width}
      height={height}
      color={colorPicker}
      alpha={alpha}
      hideHSV
      onChange={handleChange}
    />
  );
};

export default ColorPicker;
