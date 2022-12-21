import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

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
`;

const StyledBrand = styled.div`
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const Maker = ({ children }) => {
  useEffect(() => {
    console.info('render!!!');
  }, []);

  return (
    <>
      <StyledSidebar>
        {/* <StyledBrand>Dummy Logo Maker</StyledBrand> */}
        <StyledMenuItems>
          <StyledItem>L</StyledItem>
          {[...Array(4).keys()].map((item) => (
            <StyledItem key={item}>M</StyledItem>
          ))}
        </StyledMenuItems>
        <StyledTools>Tools</StyledTools>
      </StyledSidebar>
      <main>{children}</main>
    </>
  );
};

export default Maker;
