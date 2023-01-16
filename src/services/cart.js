import { getCart } from './handlelocalstorage';

const couterProducts = () => {
  const cart = getCart();
  let counter = 0;
  cart.forEach((element) => {
    counter += element.quantity;
  });
  return counter;
};

export default couterProducts;
