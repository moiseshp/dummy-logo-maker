import { numberToRem } from './helpers/numberToRem';

export const builder = (theme) => {
  const variants = Object.keys(theme.typography.variants).reduce(
    (acc, item) => ({
      ...acc,
      [item]: numberToRem(theme.typography.variants[item]),
    }),
    {},
  );

  const buttonSize = Object.keys(theme.button.size).reduce(
    (acc, item) => ({
      ...acc,
      [item]: numberToRem(theme.button.size[item]),
    }),
    {},
  );

  return {
    ...theme,
    icon: {
      ...theme.icon,
      size: numberToRem(theme.icon.size),
    },
    typography: {
      ...theme.typography,
      fontSize: numberToRem(theme.typography.fontSize),
      variants,
    },
    button: {
      ...theme.button,
      size: buttonSize,
    },
    shape: {
      ...theme.shape,
      borderRadius: numberToRem(theme.shape.borderRadius),
    },
    mixins: {
      ...theme.mixins,
      spacing: numberToRem(theme.mixins.spacing),
      toolbar: {
        ...theme.mixins.toolbar,
        minHeight: numberToRem(theme.mixins.toolbar.minHeight),
      },
    },
  };
};
