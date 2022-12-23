import { useState } from 'react';
import BrandItem from 'layouts/Main/components/BrandItem';
import MainContent from 'layouts/Main/components/MainContent';
import MenuBar from 'layouts/Main/components/MenuBar';
import MenuItem from 'layouts/Main/components/MenuItem';
import Sidebar from 'layouts/Main/components/Sidebar';
import ToolContainer from 'layouts/Main/components/ToolContainer';
// import SoccerIcon from '@icons/Soccer';
import * as toolbar from 'layouts/Main/toolbar';
import LogoBoxContainer from 'layouts/Main/components/LogoBoxContainer';
import LogoBox from 'layouts/Main/components/LogoBox';

const menuItems = [
  {
    icon: '',
    name: 'Text',
    pathname: '/groups/[groupId]/championships/[championshipId]',
  },
  {
    icon: '',
    name: 'Icon',
    pathname: '/groups/[groupId]/championships/[championshipId]/stats',
  },
  {
    icon: '',
    name: 'Layout',
    pathname: '/groups/[groupId]/championships/[championshipId]/matches',
  },
  {
    icon: '',
    name: 'Background',
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
          <BrandItem>B</BrandItem>
          {menuItems.map(({ name }) => (
            <MenuItem
              key={name}
              isActive={Boolean(activeToolbar === name)}
              onClick={() => {
                console.info(name);
                setActiveToolbar(name);
              }}
            >
              <div>
                <div>
                  Icon
                  {/* <SoccerIcon /> */}
                </div>
                <div>{name}</div>
              </div>
            </MenuItem>
          ))}
        </MenuBar>
        <ToolContainer>
          <Toolbar />
        </ToolContainer>
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
