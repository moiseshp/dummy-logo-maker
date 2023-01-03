import { useState } from 'react';
import BrandItem from 'layouts/Main/components/BrandItem';
import MainContent from 'layouts/Main/components/MainContent';
import MenuBar from 'layouts/Main/components/MenuBar';
import MenuItem from 'layouts/Main/components/MenuItem';
import Sidebar from 'layouts/Main/components/Sidebar';
import ToolbarAside from 'layouts/Main/components/ToolbarAside';
import LogoBoxContainer from 'layouts/Main/components/LogoBoxContainer';
import LogoBox from 'layouts/Main/components/LogoBox';
// import PencilRulerIcon from 'components/icons/components/PencilRuler';
import TypographyIcon from '@icons/components/Typography';
import ChartBubbleIcon from '@icons/components/ChartBubble';
import SquaresFilledIcon from '@icons/components/SquaresFilled';
import LayoutDashboardIcon from '@icons/components/LayoutDashboard';
import * as toolbar from 'layouts/Main/toolbar';

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

const Main = ({ children }) => {
  const [activeToolbar, setActiveToolbar] = useState('Text');
  const Toolbar = toolbar[activeToolbar];

  return (
    <>
      <Sidebar>
        <MenuBar>
          <BrandItem>{/* <PencilRulerIcon size={34} /> */}</BrandItem>
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
      <MainContent>
        <LogoBoxContainer>
          <LogoBox>{children}</LogoBox>
          <div>Sizing | Zoom | Download Button</div>
        </LogoBoxContainer>
      </MainContent>
    </>
  );
};

export default Main;
