const cart = [];
let total = 0;

const getCart = () => {
  return cart;
};

const addCart = (obj) => {
  total += obj.price;
  for (let index = 0; index < cart.length; index++) {
    if (obj.name === cart[index].name) {
      cart[index].amount = cart[index].amount + obj.amount;
      return;
    }
  }
  cart.push(obj);
};

const getTotal = () => {
  return total;
};

export { getCart, addCart, getTotal };
