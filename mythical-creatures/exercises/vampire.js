function createVampire(name, pet) {
  var vampire = {
    name: name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    return 'No thanks, I am too full.';
  }
}

function drink(vampire) {
  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank += 10;
    if (vampire.ouncesDrank === 50) {
      vampire.thirsty = false;
    }
  }
  return vampire;
}

function inquirePlace(locationArray, location) {
  if (locationArray.includes(location)) {
    return `Yes, I have spent some time in ${location}.`;
  } else {
    return `No, I have never been to ${location}.`;
  }
}

function findBatLovers(vampires) {
  var batLovers = []
  vampires.forEach(function(vampire) {
    if (vampire.pet === 'bat') {
      batLovers.push(vampire.name);
    }
  })
  return batLovers;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}