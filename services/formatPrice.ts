export const formatPrice = (value: number): any => {
  return new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(
    value
  );
};
