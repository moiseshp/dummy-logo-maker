/**
 * https://github.com/Wondermarin/react-color-palette#readme
 */
import { ColorPicker as ColorPickerRoot, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

const ColorPicker = ({ width, height, color, alpha, onChange }) => {
  const [colorPicker, setColorPicker] = useColor('hex', color);

  return (
    <ColorPickerRoot
      width={width}
      height={height}
      color={colorPicker}
      alpha={alpha}
      hideHSV
      onChange={setColorPicker}
      onChangeComplete={onChange}
    />
  );
};

export default ColorPicker;
