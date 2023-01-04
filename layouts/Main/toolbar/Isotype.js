/**
 * Material Icons:
 * https://fonts.google.com/icons?selected=Material+Icons
 */
import { useState } from 'react';
import * as icons from '@styled-icons/material';
import ColorPicker from 'components/ColorPicker';
import TextField from '@uitoolkit/TextField';
import Slider from '@uitoolkit/Slider';
import Typography from '@uitoolkit/Typography';
import Stack from '@uitoolkit/Stack';
import Box from '@uitoolkit/Box';
import Tabs from '@uitoolkit/Tabs';
import Card from '@uitoolkit/Card';
import materialIcons from 'data/material-icons.json';
import SearchIcon from '@icons/components/Search';
import CloseIcon from '@icons/components/Close';
import { useLogo } from 'contexts/LogoProvider';

const Isotype = () => {
  const [logo, updateLogo] = useLogo();
  const [searchText, setSearchText] = useState('');
  const [iconsFiltered, setIconsFiltered] = useState(materialIcons);
  const handleSearch = (event) => {
    const { value } = event?.target;
    setSearchText(value);
    handleFiltered(value);
  };
  const handleClear = () => {
    setSearchText('');
    setIconsFiltered(materialIcons);
  };
  const handleFiltered = (value) => {
    const icons = materialIcons.filter(({ tags }) => tags.join().includes(value.toLowerCase()));
    setIconsFiltered(icons);
  };
  return (
    <Tabs
      fixesTabs
      position="sticky"
      top={0}
      py={3}
      items={[
        { value: 'icons', text: 'Icons' },
        { value: 'color', text: 'Size & Color' },
      ]}
    >
      <Stack spacing={2.5} value="icons">
        <Box bgColor="white" position="sticky" top={73}>
          <TextField
            fullWidth
            placeholder="Search icon"
            value={searchText}
            onChange={handleSearch}
            endIcon={
              searchText ? (
                <CloseIcon color="disabled" onClick={handleClear} />
              ) : (
                <SearchIcon color="disabled" />
              )
            }
          />
        </Box>
        <Box
          display="grid"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '1rem',
          }}
        >
          {iconsFiltered.map(({ id }) => {
            const Icon = icons[id];
            return (
              <Card
                key={id}
                p={1.5}
                hasBorder
                display="flex"
                justifyContent="center"
                bgColor="transparent"
                onClick={() => updateLogo({ iconId: id })}
              >
                <Icon color="textPrimary" size={40} />
              </Card>
            );
          })}
        </Box>
      </Stack>
      <Stack spacing={2.5} value="color">
        <Box>
          <Typography variant="caption">Size</Typography>
          <Slider
            value={logo.iconSize}
            min={50}
            max={300}
            onChange={(event) =>
              updateLogo({
                iconSize: Number(event.target?.value),
              })
            }
          />
        </Box>
        <Box>
          <Typography variant="caption">Color</Typography>
          <ColorPicker
            width={252}
            height={140}
            color={logo.iconColor}
            onChange={(color) => updateLogo({ iconColor: color.hex })}
          />
        </Box>
      </Stack>
    </Tabs>
  );
};

export default Isotype;
