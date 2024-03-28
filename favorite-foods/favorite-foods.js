function createFavoriteFood(dish) {
  var food = {
    name: dish.dish,
    ingredients: dish.ingredients,
    isSpicy: dish.isSpicy,
    timesOrdered: 0
  }
  return food;
}

function commentOnSpiciness(food) {
  if (food.isSpicy) {
    return `Wow, this ${food.name} is so spicy!`
  } else {
    return `Phew, this ${food.name} is not very spicy.`
  }
}

function orderFood(food) {
  food.timesOrdered += 1;
  return food;
}

function createShoppingList(foods) {
  list = []
  foods.forEach(function(food) {
    list.push(food.ingredients)
  })
  return list.flat();
}

module.exports = { 
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
};