const RUBLE_EXCHANGE_RATE = 70;

export const priceConverter = (value: number): number => {
  return value * RUBLE_EXCHANGE_RATE;
};
