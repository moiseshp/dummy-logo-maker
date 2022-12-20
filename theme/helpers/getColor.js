import { baseTheme } from '../baseTheme';

export const getColor = (value) => {
  return baseTheme.pallete[value] || value;
};
