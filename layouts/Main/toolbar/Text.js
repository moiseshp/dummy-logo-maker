import { useLogo } from 'contexts/LogoProvider';
import ColorPicker from 'components/ColorPicker';
import TextField from '@uitoolkit/TextField';
import Slider from '@uitoolkit/Slider';
import Typography from '@uitoolkit/Typography';
import Stack from '@uitoolkit/Stack';
import Box from '@uitoolkit/Box';

const Text = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <div>
      <Stack>
        <Box>
          <Typography variant="body2">Logo text</Typography>
          <TextField
            fullWidth
            placeholder="Eg. Beatifult Name"
            // label="Type your logo name"
            value={logo.text}
            onChange={(event) =>
              updateLogo({
                text: event.target?.value,
              })
            }
          />
        </Box>
        <Box>
          <Typography variant="body2">Font size</Typography>
          <Slider
            value={logo.fontSize}
            min={10}
            max={60}
            onChange={(event) =>
              updateLogo({
                fontSize: Number(event.target?.value),
              })
            }
          />
        </Box>
      </Stack>

      <br />
      <p>FontWeight</p>
      <hr />
      <p>FontSize</p>
      <hr />

      <p>LetterSpacing</p>
      <hr />

      <p>Color</p>
      <hr />

      <p>FontFamily</p>
      <hr />

      <ColorPicker
        width={252}
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
