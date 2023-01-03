import { FC } from "react";

import styles from "../styles/Rating.module.scss";

interface RatingProps {
  cardId: number;
}

const Rating: FC<RatingProps> = ({ cardId }) => {
  return (
    <div className={styles.ratingArea}>
      <input
        type="radio"
        id={`${cardId}-star-5`}
        name={`${cardId}`}
        value="5"
      />
      <label htmlFor={`${cardId}-star-5`} title="Оценка «5»"></label>

      <input
        type="radio"
        id={`${cardId}-star-4`}
        name={`${cardId}`}
        value="4"
      />
      <label htmlFor={`${cardId}-star-4`} title="Оценка «4»"></label>

      <input
        type="radio"
        id={`${cardId}-star-3`}
        name={`${cardId}`}
        value="3"
      />
      <label htmlFor={`${cardId}-star-3`} title="Оценка «3»"></label>

      <input
        type="radio"
        id={`${cardId}-star-2`}
        name={`${cardId}`}
        value="2"
      />
      <label htmlFor={`${cardId}-star-2`} title="Оценка «2»"></label>

      <input
        type="radio"
        id={`${cardId}-star-1`}
        name={`${cardId}`}
        value="1"
      />
      <label htmlFor={`${cardId}-star-1`} title="Оценка «1»"></label>
    </div>
  );
};

export default Rating;
