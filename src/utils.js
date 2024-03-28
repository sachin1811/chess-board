export const colorTile = (n) => {
  const isEvenRow = Math.floor(n / 8) % 2 === 0;
  const isEvenTile = n % 2 === 0;

  return (isEvenRow && isEvenTile) || (!isEvenRow && !isEvenTile)
    ? true
    : false;
};
