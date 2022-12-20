export const get100vh = (value, subtract) => {
  if (subtract) {
    return `calc(calc(var(--vh, 1vh) * ${value}) - ${subtract})`;
  }
  return `calc(var(--vh, 1vh) * ${value})`;
};
