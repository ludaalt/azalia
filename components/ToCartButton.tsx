import { FC, useState } from "react";
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
  const [isproductInCart, setIsProductInCart] = useState(false);
  return (
    <div className={styles.toCartBlock}>
      {!isproductInCart && (
        <>
          <button
            className={styles.toCartButton}
            onClick={() => setIsProductInCart((state) => !state)}
          >
            В корзину
          </button>

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
        </>
      )}

      {isproductInCart && (
        <button
          className={styles.inCartLabel}
          onClick={() => setIsProductInCart((state) => !state)}
        >
          В корзине
        </button>
      )}
    </div>
  );
};

export default ToCartButton;
