function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  }
  return dragon;
}

function greetRider(dragon) {
  // var greeting = 'Hi, ' + dragon.rider + '!';
  // return greeting;
  return `Hi, ${dragon.rider}!` // << note BACKTICKS not quotes!!
}

function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten === 3) {
    dragon.hungry = false;
  }
  return dragon;
}

function findFireBreathers(dragonArray) {
  var fireBreathers = []
  dragonArray.forEach(function(dragon) {
    if (dragon.temperment === 'aggressive') {
      fireBreathers.push(dragon);
    }
  })
  return fireBreathers;
}

module.exports = {
  createDragon,
  greetRider,
  eat, 
  findFireBreathers
}