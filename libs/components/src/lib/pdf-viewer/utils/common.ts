export const getPagesFromNumber = (num: number) => {
  return Array.from({ length: num }, (_, i) => i + 1);
};
