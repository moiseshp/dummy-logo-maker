import React, { useState } from 'react';
import Box from '../Box';
import styled, { css } from 'styled-components';

const StyledTabs = styled(Box)`
  display: flex;
  border-bottom: ${({ theme }) => `${theme.helpers.getRem(1)} solid ${theme.palette.lightGray};`};
  justify-content: ${({ fixesTabs }) => (fixesTabs ? 'space-between' : 'normal')};
`;

const StyledTab = styled(Box)`
  font-size: ${({ theme }) => theme.typography.variants.body2};
  color: ${({ theme, isActive }) => (isActive ? theme.palette.primary : 'inherit')};
  padding: ${({ theme }) => theme.helpers.getSpacing(3)};
  height: ${({ theme }) => theme.helpers.getRem(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  background-color: white;
  flex: ${({ fixesTabs }) => (fixesTabs ? 'auto' : 'inherit')};
  ${({ theme, isActive }) =>
    isActive &&
    css`
      font-weight: ${theme.typography.bolder};
      &:before {
        content: '';
        position: absolute;
        bottom: -${theme.helpers.getRem(1)};
        height: ${theme.helpers.getRem(2)};
        left: 0;
        right: 0;
        background-color: ${theme.palette.primary};
      }
    `}
`;

const Tabs = ({ children, items, isActive, px, py, p, fixesTabs, ...rest }) => {
  const [activeTab, setActiveTab] = useState(isActive || items[0].value);
  const tabPanel = React.Children.toArray(children).find(({ props }) => props.value === activeTab);

  return (
    <>
      <StyledTabs fixesTabs={fixesTabs} {...rest}>
        {items.map(({ value, text }) => (
          <StyledTab
            isActive={activeTab === value}
            key={value}
            fixesTabs={fixesTabs}
            onClick={() => setActiveTab(value)}
          >
            {text}
          </StyledTab>
        ))}
      </StyledTabs>
      <Box pl={px} pr={px} pt={py} pb={py} p={p}>
        {tabPanel}
      </Box>
    </>
  );
};

Tabs.defaultProps = {
  items: [],
  p: 0,
  px: 0,
  py: 0,
  fixesTabs: false,
  isSticky: false,
};

export default Tabs;
