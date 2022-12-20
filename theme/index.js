import { builder } from './builder';
import { baseTheme } from './baseTheme';
import helpers from './helpers';

const theme = {
  ...builder(baseTheme),
  helpers,
};

export default theme;
