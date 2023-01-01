import { FC } from "react";
import styles from "../styles/ToCartButton.module.scss";

interface ToCartButtonProps {
  productCurrentCount: number;
  decreaseCount: (value: number) => void;
  increaseCount: (value: number) => void;
}

const ToCartButton: FC<ToCartButtonProps> = ({
  productCurrentCount,
  decreaseCount,
  increaseCount,
}) => {
  return (
    <div className={styles.toCartBlock}>
      <button className={styles.toCartButton}>В корзину</button>

      <button
        className={`${styles.countButton} ${styles.decreaseButton}`}
        onClick={() => decreaseCount(productCurrentCount - 1)}
        disabled={productCurrentCount === 0}
      ></button>
      <p className={styles.productCount}>{productCurrentCount}</p>
      <button
        className={`${styles.countButton} ${styles.increaseButton}`}
        onClick={() => increaseCount(productCurrentCount + 1)}
      ></button>
    </div>
  );
};

export default ToCartButton;
