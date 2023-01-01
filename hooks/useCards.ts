import axios from "axios";
import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

export const useCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products")
          .then((response: AxiosResponse) => {
            setCards(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return cards;
};
