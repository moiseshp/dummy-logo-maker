export const getDirection = (variant) => (variant === 'Icon-Left' ? 'ltr' : 'rtl');
export const getFlexDirection = (variant) => {
  if (variant === 'Icon-Top') {
    return 'column';
  }
  if (variant === 'Icon-Bottom') {
    return 'column-reverse';
  }
  return 'row';
};
