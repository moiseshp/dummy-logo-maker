import { getRem } from './helpers/getRem';

export const builder = (theme) => {
  const variants = Object.keys(theme.typography.variants).reduce(
    (acc, item) => ({
      ...acc,
      [item]: getRem(theme.typography.variants[item]),
    }),
    {},
  );

  const buttonSize = Object.keys(theme.button.size).reduce(
    (acc, item) => ({
      ...acc,
      [item]: getRem(theme.button.size[item]),
    }),
    {},
  );

  return {
    ...theme,
    icon: {
      ...theme.icon,
      size: getRem(theme.icon.size),
    },
    typography: {
      ...theme.typography,
      fontSize: getRem(theme.typography.fontSize),
      variants,
    },
    button: {
      ...theme.button,
      size: buttonSize,
    },
    shape: {
      ...theme.shape,
      borderRadius: getRem(theme.shape.borderRadius),
    },
    mixins: {
      ...theme.mixins,
      spacing: getRem(theme.mixins.spacing),
      toolbar: {
        ...theme.mixins.toolbar,
        minHeight: getRem(theme.mixins.toolbar.minHeight),
      },
    },
  };
};
