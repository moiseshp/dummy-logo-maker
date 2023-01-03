import { baseTheme } from '../baseTheme';

export const getColor = (value) => {
  return baseTheme.palette[value] || value;
};
