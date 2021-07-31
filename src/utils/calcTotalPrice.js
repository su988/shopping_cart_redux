export const calcTotalPrice = (cart) => {
  let price = 0;

  cart.forEach((item) => {
    price += item.price * item.quantity;
  });

  return price.toFixed(2);
};
