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
import googleFonts from 'utils/google-fonts.json';

const Text = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <Tabs
      fixesTabs
      items={[
        { value: 'font', text: 'Font' },
        { value: 'color', text: 'Color' },
        { value: 'family', text: 'Family' },
      ]}
      py={3}
      px={1}
    >
      <Stack spacing={4} value="font">
        <Box>
          <Typography variant="body2" color="textSecondary">
            Type your logo name
          </Typography>
          <TextField
            fullWidth
            placeholder="Eg. DummyLogo"
            value={logo.text}
            onChange={(event) =>
              updateLogo({
                text: event.target?.value,
              })
            }
          />
        </Box>
        <Box>
          <Typography variant="body2" color="textSecondary">
            Font weight
          </Typography>
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
          <Typography variant="body2" color="textSecondary">
            Font size
          </Typography>
          <Slider
            value={logo.fontSize}
            min={20}
            max={60}
            onChange={(event) =>
              updateLogo({
                fontSize: Number(event.target?.value),
              })
            }
          />
        </Box>
        <Box>
          <Typography variant="body2" color="textSecondary">
            Letter spacing
          </Typography>
          <Slider
            value={logo.letterSpacing}
            min={1}
            max={10}
            onChange={(event) =>
              updateLogo({
                letterSpacing: Number(event.target?.value),
              })
            }
          />
        </Box>
      </Stack>
      <Stack spacing={4} value="color">
        <ColorPicker
          width={236}
          height={160}
          color={logo.color}
          onChange={(color) => updateLogo({ color: color.hex })}
        />
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
            <Typography mb={0} className={item} variant="h6">
              {item.replace('_', ' ')}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Tabs>
  );
};

export default Text;
