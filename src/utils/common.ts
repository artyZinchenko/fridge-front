export const shortenString = (text: string, limit: number): string => {
  if (text.length <= limit) return text;
  return text.slice(0, limit).concat('...');
};

export const round = (number: number) => {
  if (number % 1 !== 0 && number > 10) return Math.round(number / 10) * 10;
  return number;
};
