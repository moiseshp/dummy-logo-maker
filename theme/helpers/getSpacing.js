import { baseTheme } from '../baseTheme';
import { numberToRem } from './numberToRem';

export const getSpacing = (value) => {
  return numberToRem(baseTheme.mixins.spacing * value);
};
