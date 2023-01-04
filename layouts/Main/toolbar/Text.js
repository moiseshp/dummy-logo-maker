import { useLogo } from 'contexts/LogoProvider';
import ColorPicker from 'components/ColorPicker';
import TextField from '@uitoolkit/TextField';
import Slider from '@uitoolkit/Slider';
import Typography from '@uitoolkit/Typography';
import Stack from '@uitoolkit/Stack';
import Box from '@uitoolkit/Box';
import Tabs from '@uitoolkit/Tabs';
import Button from '@uitoolkit/Button';
import Card from '@uitoolkit/Card';
import googleFonts from 'data/google-fonts.json';

const Text = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <Tabs
      py={3}
      fixesTabs
      items={[
        { value: 'font', text: 'Text' },
        { value: 'family', text: 'Family' },
      ]}
    >
      <Stack spacing={2.5} value="font">
        <Box>
          <Typography variant="caption">Type your logo name</Typography>
          <TextField
            fullWidth
            placeholder="Eg. Amazing Logo"
            value={logo.text}
            onChange={(event) =>
              updateLogo({
                text: event.target?.value,
              })
            }
          />
        </Box>
        <Box>
          <Typography variant="caption">Font weight</Typography>
          <Stack direction="row" spacing={1}>
            {['normal', 'bold'].map((item) => {
              const isSelected = Boolean(logo.fontWeight === item);
              return (
                <Button
                  key={item}
                  variant={isSelected ? 'contained' : 'outlined'}
                  color={isSelected ? 'primary' : 'textPrimary'}
                  size="small"
                  onClick={() =>
                    updateLogo({
                      fontWeight: item,
                    })
                  }
                >
                  {item.toUpperCase()}
                </Button>
              );
            })}
          </Stack>
        </Box>
        <Box>
          <Typography variant="caption">Font size</Typography>
          <Slider
            value={logo.fontSize}
            min={10}
            max={160}
            onChange={(event) =>
              updateLogo({
                fontSize: Number(event.target?.value),
              })
            }
          />
        </Box>
        <Box>
          <Typography variant="caption">Letter spacing</Typography>
          <Slider
            value={logo.letterSpacing}
            min={-20}
            max={80}
            onChange={(event) =>
              updateLogo({
                letterSpacing: Number(event.target?.value),
              })
            }
          />
        </Box>
        <Box>
          <Typography variant="caption">Color</Typography>
          <ColorPicker
            width={252}
            height={140}
            color={logo.color}
            onChange={(color) => updateLogo({ color: color.hex })}
          />
        </Box>
      </Stack>
      <Stack spacing={1} value="family">
        {googleFonts.map((item) => (
          <Card
            key={item}
            hasBorder
            isDark={item === logo.fontFamily}
            bgColor={item === logo.fontFamily ? 'primary' : 'transparent'}
            onClick={() => {
              updateLogo({
                fontFamily: item,
              });
            }}
          >
            <Typography mb={0} className={item} variant="h6" fontWeight="bolder">
              {item.replace('_', ' ')}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Tabs>
  );
};

export default Text;
