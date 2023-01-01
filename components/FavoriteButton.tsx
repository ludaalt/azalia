import { FC, useState } from "react";

import styles from "../styles/FavoriteButton.module.scss";

interface FavoriteButtonProps {
  handleFavorite: (isFavorite: boolean) => void;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ handleFavorite }) => {
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);
  return (
    <button
      className={
        isFavoriteActive
          ? `${styles.button} ${styles.button_active}`
          : `${styles.button}`
      }
      onClick={() => {
        setIsFavoriteActive((state) => !state);
        handleFavorite(isFavoriteActive);
      }}
    ></button>
  );
};

export default FavoriteButton;
