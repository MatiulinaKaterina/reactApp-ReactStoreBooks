import React from 'react';
import { AppContext } from '../components/CatalogProducts';

export const useBasket = () => {
  const { booksInBasket,setBooksInBasket } = React.useContext(AppContext);
  const totalPrice = booksInBasket.reduce((sum, obj) => Number(obj.price) + sum, 0);

  return { booksInBasket,setBooksInBasket, totalPrice };
};