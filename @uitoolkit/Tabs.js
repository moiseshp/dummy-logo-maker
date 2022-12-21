import React, { useState } from 'react';
import Box from 'components/commons/Box';
import styled, { css } from 'styled-components';

const StyledTabs = styled(Box)`
  display: flex;
  border-bottom: ${({ theme }) =>
    `${theme.helpers.numberToRem(1)} solid ${theme.pallete.grayLight};`};
`;

const StyledTab = styled(Box)`
  font-size: ${({ theme }) => theme.typography.variants.caption};
  color: ${({ theme, active }) => (active ? theme.pallete.primary : 'inherit')};
  font-weight: ${({ theme }) => theme.typography.bolder};
  padding: 0 ${({ theme }) => theme.helpers.getSpacing(2)};
  height: ${({ theme }) => theme.helpers.numberToRem(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({ theme, active }) =>
    active &&
    css`
      &:before {
        content: '';
        position: absolute;
        bottom: -${theme.helpers.numberToRem(1)};
        height: ${theme.helpers.numberToRem(2)};
        left: 0;
        right: 0;
        background-color: ${theme.pallete.primary};
      }
    `}
`;

const Tabs = ({ children, items, active, p, ...rest }) => {
  const [activeTab, setActiveTab] = useState(active || items[0].value);
  const tabPanel = React.Children.toArray(children).find(({ props }) => props.value === activeTab);

  return (
    <Box {...rest}>
      <StyledTabs>
        {items.map(({ value, text }) => (
          <StyledTab active={activeTab === value} key={value} onClick={() => setActiveTab(value)}>
            {text}
          </StyledTab>
        ))}
      </StyledTabs>
      <Box p={p}>{tabPanel}</Box>
    </Box>
  );
};

Tabs.defaultProps = {
  items: [],
  p: 2,
};

export default Tabs;
