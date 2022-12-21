import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import SoccerIcon from '@icons/Soccer';
import * as tools from './tools';
const routes = [
  {
    icon: '',
    name: 'Resumen',
    pathname: '/groups/[groupId]/championships/[championshipId]',
  },
  {
    icon: '',
    name: 'Estadísticas',
    pathname: '/groups/[groupId]/championships/[championshipId]/stats',
  },
  {
    icon: '',
    name: 'Pichangas',
    pathname: '/groups/[groupId]/championships/[championshipId]/matches',
  },
];

const StyledSidebar = styled.aside`
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 370px;
  /* border-right: 1px solid #eee; */
  box-sizing: content-box;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.03);
`;

const StyledMenuItems = styled.nav`
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 70px;
  border-right: 1px solid #eee;
`;

const StyledTools = styled.div`
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 70px;
  position: absolute;
  width: 300px;
`;

const StyledItem = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => (isActive ? 'red' : 'black')};
  /* border: ${({ isActive }) => (isActive ? 1 : 0)}px solid #eee;
  border-right: ${({ isActive }) => (isActive ? 1 : 0)}px solid white; */
`;

const StyledBrandItem = styled(StyledItem)`
  border-bottom: 1px solid #eee;
`;

const StyledMainContent = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBrandBox = styled.div`
  /* border: 1px solid #eee; */
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.05);
`;

const Maker = ({ children }) => {
  const [currentToolId, setCurrentToolId] = useState('Tool1');
  const Tool = tools[currentToolId];

  useEffect(() => {
    console.info({ currentToolId });
  }, [currentToolId]);

  return (
    <>
      <StyledSidebar>
        {/* <StyledBrand>Dummy Logo Maker</StyledBrand> */}
        <StyledMenuItems>
          <StyledBrandItem>L</StyledBrandItem>
          {[...Array(4).keys()].map((item) => (
            <StyledItem
              key={item}
              isActive={Boolean(currentToolId === `Tool${item + 1}`)}
              onClick={() => setCurrentToolId(`Tool${item + 1}`)}
            >
              <div>
                <div>
                  <SoccerIcon />
                </div>
                <div>TEXT</div>
              </div>
            </StyledItem>
          ))}
        </StyledMenuItems>
        <StyledTools>{currentToolId && <Tool />}</StyledTools>
      </StyledSidebar>
      <StyledMainContent>
        <StyledBrandBox>
          <div>{children}</div>
          <div>Tools</div>
        </StyledBrandBox>
      </StyledMainContent>
    </>
  );
};

export default Maker;
