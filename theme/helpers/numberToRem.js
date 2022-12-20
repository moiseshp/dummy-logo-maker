export const numberToRem = (value, flag) => {
  if (typeof value !== 'number') return value;
  return `${value / (flag === 'mediaQueries' ? 16 : 10)}rem`;
};
