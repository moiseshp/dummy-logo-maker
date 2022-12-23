import { useLogo } from 'contexts/LogoProvider';
import ColorPicker from 'components/ColorPicker';

const Text = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <div>
      <div>Text</div>
      <input
        defaultValue={logo.text}
        onChange={(e) =>
          updateLogo({
            text: e.target.value,
          })
        }
        placeholder="type your text"
      />
      <br />

      <ColorPicker
        alpha
        width={267}
        height={200}
        color={logo.color}
        onChange={(color) => updateLogo({ color: color.hex })}
      />

      <select
        defaultValue={logo.fontFamily}
        onChange={(e) => updateLogo({ fontFamily: e.target.value })}
      >
        <option value="Ubuntu">Ubuntu</option>
        <option value="Josefin_Slab">Josefin Slab</option>
        <option value="Montserrat">Montserrat</option>
      </select>
    </div>
  );
};

export default Text;
