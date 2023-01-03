import { FC, useState } from "react";
import Image from "next/image";

import styles from "../styles/Cards.module.scss";
import ProductPrice from "./ProductPrice";
import ToCartButton from "./ToCartButton";
import FavoriteButton from "./FavoriteButton";
import Rating from "./Rating";

interface ProductCardProps {
  card: {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
  };
}

const ProductCard: FC<ProductCardProps> = ({ card }) => {
  const [productCount, setProductCount] = useState(1);
  const [isFavoriteProduct, setIsFavoriteProduct] = useState(false);

  return (
    <div className={styles.card}>
      <Image
        src={card.image}
        alt={card.title}
        width={220}
        height={220}
        priority
      />
      <div className={styles.categoryBlock}>
        <p className={styles.category}>{card.category}</p>
        <Rating cardId={card.id} />
      </div>

      <h2>{card.title}</h2>

      <ProductPrice value={card.price} />

      <div
        style={{
          marginTop: "13px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ToCartButton
          productCurrentCount={productCount}
          decreaseCount={(value) => setProductCount(value)}
          increaseCount={(value) => setProductCount(value)}
        />
        <FavoriteButton
          handleFavorite={(value) => setIsFavoriteProduct(value)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
