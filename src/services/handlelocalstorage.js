export const saveProduct = ({ image, price, title, id }) => {
  const objProduct = {
    id,
    title,
    price,
    image,
    quantity: 1,
  };
  const actualCart = JSON.parse(localStorage.getItem('cart'));
  if (actualCart === null) {
    localStorage.setItem('cart', JSON.stringify([objProduct]));
    return;
  }
  const product = actualCart.find((e) => e.id === id);
  if (product) {
    product.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(actualCart));
  } else {
    localStorage.setItem('cart', JSON.stringify([objProduct, ...actualCart]));
  }
};

export const removeProduct = (id) => {
  const actualCart = JSON.parse(localStorage.getItem('cart'));
  const product = actualCart.find((e) => e.id === id);
  const productId = actualCart.indexOf(product);
  actualCart.splice(productId, 1);
  localStorage.setItem('cart', JSON.stringify(actualCart));
  // console.log(actualCart);
};
