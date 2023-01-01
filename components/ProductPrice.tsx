import { FC } from "react";

import styles from "../styles/Cards.module.scss";
import { priceConverter } from "../services/priceConverter";
import { formatPrice } from "../services/formatPrice";

interface ProductPriceProps {
  value: number;
}

const ProductPrice: FC<ProductPriceProps> = ({ value }) => {
  return (
    <p className={styles.price}>
      {formatPrice(priceConverter(value))}
      {"\u20BD"}
    </p>
  );
};

export default ProductPrice;
