import { baseTheme } from '../baseTheme';
import { getRem } from './getRem';

export const getSpacing = (value) => {
  return getRem(baseTheme.mixins.spacing * value);
};
