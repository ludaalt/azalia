import ProductCard from "./ProductCard";
import { useCards } from "../hooks/useCards";
import styles from "../styles/Cards.module.scss";

const CardList = () => {
  const cards = useCards();

  return (
    <ul className={styles.cardList}>
      {cards.length > 0 &&
        cards.map((item: any) => (
          <li key={item.id}>
            <ProductCard card={item} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
