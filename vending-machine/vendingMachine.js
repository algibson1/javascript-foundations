function createItemStock(name, quantity, price) {
  var itemStock = {
    name: name || 'unknown',
    quantity: quantity || 0,
    price: price || 1.00
  };
  return itemStock;
};

function makePurchase(item, money) {
  if (item.quantity === 0) {
    return "Sorry, there are none left"
  } else if (item.price > money) {
    return `Sorry, you need at least $${item.price} to make that purchase`
  } else {
    return `Here are your ${item.name}`
  }
}

function collectChange(coins) {
  return coins.reduce(function(total, num) { return total + num; });
  // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  // works a little bit like recursion under the hood
  // total - the initial value or the previously returned value of the function
  // currentValue - for each element, like iterating
  // currentIndex - optional - index of current element, if useful
  // arr - optional - the array the current element belongs to
  // initialValue - optional - a value to start with, if useful
}


module.exports = {
  createItemStock,
  makePurchase,
  collectChange
}
