import { useLogo } from 'contexts/LogoProvider';
import Stack from '@uitoolkit/Stack';
import Box from '@uitoolkit/Box';
import Typography from '@uitoolkit/Typography';
import ColorPicker from 'components/ColorPicker';
import Slider from '@uitoolkit/Slider';

const LogoBox = () => {
  const [logo, updateLogo] = useLogo();

  return (
    <Stack spacing={2.5} mt={3}>
      <Box>
        <Typography variant="caption">Padding</Typography>
        <Slider
          value={logo.padding}
          min={0}
          max={300}
          onChange={(event) =>
            updateLogo({
              padding: Number(event.target?.value),
            })
          }
        />
      </Box>
      <Box>
        <Typography variant="caption">Gap</Typography>
        <Slider
          value={logo.gap}
          min={0}
          max={100}
          onChange={(event) =>
            updateLogo({
              gap: Number(event.target?.value),
            })
          }
        />
      </Box>
      <Box>
        <Typography variant="caption">Background</Typography>
        <ColorPicker
          width={252}
          height={140}
          color={logo.backgroundColor}
          onChange={(color) => updateLogo({ backgroundColor: color.hex })}
        />
      </Box>
    </Stack>
  );
};

export default LogoBox;
