import { useRef } from 'react';
import styled from 'styled-components';
import { downloadImage } from 'utils/downloadImage';
import MainLayout from 'layouts/Main';
import { useLogo } from 'contexts/LogoProvider';
import { getDirection, getFlexDirection } from 'utils/layout';
import * as icons from '@styled-icons/material';
import Button from '@uitoolkit/Button';
import Box from '@uitoolkit/Box';

const StyledLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.05);
  background-color: ${({ logo }) => logo.backgroundColor};
  gap: ${({ theme, logo }) => theme.helpers.getRem(logo.gap)};
  padding: ${({ theme, logo }) => theme.helpers.getRem(logo.padding)};
  direction: ${({ logo }) => getDirection(logo.layout)};
  flex-direction: ${({ logo }) => getFlexDirection(logo.layout)};
`;

const StyledLogoText = styled.div`
  color: ${({ logo }) => logo.color};
  font-size: ${({ theme, logo }) => theme.helpers.getRem(logo.fontSize)};
  letter-spacing: ${({ theme, logo }) => theme.helpers.getRem(logo.letterSpacing)};
  font-weight: ${({ logo }) => logo.fontWeight};
`;

const Home = () => {
  const [logo] = useLogo();
  const DownloadIcon = icons['Download'];
  const Icon = icons[logo.iconId];
  const htmlDivElementRef = useRef();
  const handleDownload = () => {
    downloadImage(htmlDivElementRef.current);
  };
  return (
    <>
      <StyledLogoBox ref={htmlDivElementRef} logo={logo}>
        <Icon color={logo.iconColor} size={logo.iconSize} />
        <StyledLogoText className={logo.fontFamily} logo={logo}>
          {logo.text}
        </StyledLogoText>
      </StyledLogoBox>
      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleDownload}
          startIcon={<DownloadIcon size={20} />}
        >
          Download
        </Button>
      </Box>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
