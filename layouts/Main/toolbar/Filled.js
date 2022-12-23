import { useLogo } from 'contexts/LogoProvider';
import ColorPicker from 'components/ColorPicker';

const Filled = () => {
  const [logo, updateLogo] = useLogo();

  return (
    <div>
      <div>FIlled</div>
      <p>Sit amet dolor</p>
      <ColorPicker
        alpha
        width={267}
        height={200}
        color={logo.backgroundColor}
        onChange={(color) => updateLogo({ backgroundColor: color.hex })}
      />
    </div>
  );
};

export default Filled;
