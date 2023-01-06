import { useState } from 'react';
import BrandItem from 'layouts/Main/components/BrandItem';
import Main from 'layouts/Main/components/Main';
import MenuBar from 'layouts/Main/components/MenuBar';
import MenuItem from 'layouts/Main/components/MenuItem';
import Sidebar from 'layouts/Main/components/Sidebar';
import ToolbarAside from 'layouts/Main/components/ToolbarAside';
import { DesignServices } from '@styled-icons/material';
import TypographyIcon from '@icons/components/Typography';
import ChartBubbleIcon from '@icons/components/ChartBubble';
import SquaresFilledIcon from '@icons/components/SquaresFilled';
import LayoutDashboardIcon from '@icons/components/LayoutDashboard';
import Signature from 'components/Signature';
import Box from '@uitoolkit/Box';
import * as toolbar from 'layouts/Main/toolbar';
import Typography from '@uitoolkit/Typography';

const menuItems = [
  {
    id: 'Text',
    icon: <TypographyIcon />,
    name: 'Text',
    pathname: '/groups/[groupId]/championships/[championshipId]',
  },
  {
    id: 'Isotype',
    icon: <ChartBubbleIcon />,
    name: 'Icons',
    pathname: '/groups/[groupId]/championships/[championshipId]/stats',
  },
  {
    id: 'LogoBox',
    icon: <SquaresFilledIcon />,
    name: 'Box',
    pathname: '/groups/[groupId]/championships/[championshipId]/matches',
  },
  {
    id: 'Layout',
    icon: <LayoutDashboardIcon />,
    name: 'Layout',
    pathname: '/groups/[groupId]/championships/[championshipId]/matches',
  },
];

const MainLayout = ({ children }) => {
  const [activeToolbar, setActiveToolbar] = useState('Text');
  const Toolbar = toolbar[activeToolbar];

  return (
    <>
      <Sidebar>
        <MenuBar>
          <BrandItem>
            <DesignServices size={40} />
          </BrandItem>
          {menuItems.map(({ id, icon, name }) => (
            <MenuItem
              key={id}
              isActive={Boolean(activeToolbar === id)}
              onClick={() => setActiveToolbar(id)}
            >
              <div>
                {icon}
                <div>{name}</div>
              </div>
            </MenuItem>
          ))}
        </MenuBar>
        <ToolbarAside>
          <Toolbar />
        </ToolbarAside>
      </Sidebar>
      <Main>
        <Box>{children}</Box>
        <Box position="absolute" bottom={0} height={40}>
          <Typography variant="caption">
            <Signature />
          </Typography>
        </Box>
      </Main>
    </>
  );
};

export default MainLayout;
