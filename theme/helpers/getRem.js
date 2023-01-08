// const isMediaQuery = (flag) => flag === 'mediaQueries';
// const getRootFontSize = (flag) => (isMediaQuery(flag) ? 16 : 10);

const INIT_FONT_SIZE = 10;

export const getRem = (value) => {
  if (typeof value !== 'number') return value;
  return `${value / INIT_FONT_SIZE}rem`;
};
