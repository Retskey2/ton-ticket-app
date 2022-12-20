export const getShortToken = (TOKEN: string) => {
  return TOKEN.substr(0, 4) + '...' + TOKEN.slice(-4);
};
