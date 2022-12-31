import { FC } from "react";

import styles from "../styles/FavoriteButton.module.scss";

interface FavoriteButtonProps {
  isActive: boolean;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ isActive }) => {
  return (
    <button
      className={
        isActive
          ? `${styles.button} ${styles.button_active}`
          : `${styles.button}`
      }
    ></button>
  );
};

export default FavoriteButton;
