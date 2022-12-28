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
        <Typography variant="caption">Size</Typography>
        <Slider
          value={logo.boxMargins}
          min={0}
          max={200}
          onChange={(event) =>
            updateLogo({
              boxMargins: Number(event.target?.value),
            })
          }
        />
      </Box>
      <Box>
        <Typography variant="caption">Size</Typography>
        <ColorPicker
          width={236}
          height={140}
          color={logo.backgroundColor}
          onChange={(color) => updateLogo({ backgroundColor: color.hex })}
        />
      </Box>
    </Stack>
  );
};

export default LogoBox;
