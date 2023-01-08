import { useLogo } from 'contexts/LogoProvider';
import Card from '@uitoolkit/Card';
import Stack from '@uitoolkit/Stack';
import Typography from '@uitoolkit/Typography';
import layouts from 'data/layouts.json';
import Box from '@uitoolkit/Box';
import LayoutItem from './Item';

const Layout = () => {
  const [logo, updateLogo] = useLogo();

  return (
    <Box mt={3}>
      <Typography variant="caption">Layouts</Typography>
      <Stack spacing={2}>
        {layouts.map((item) => (
          <Card
            key={item}
            hasBorder
            p={0}
            isDark={item === logo.layout}
            bgColor={item === logo.layout ? 'primary' : 'transparent'}
            onClick={() => {
              updateLogo({
                layout: item,
              });
            }}
          >
            <LayoutItem variant={item} />
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Layout;
