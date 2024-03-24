function createHobbit(name, age) {
  var isAdult = (age >= 33) ? true : false
  var isOld = (age >= 101) ? true : false
  
  var hobbit = {
    name: name || 'unknown',
    age: age || 0,
    isAdult: isAdult,
    isOld: isOld,
    acquaintances: []
  }

  return hobbit;
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1;
  if (hobbit.age === 33) {
    hobbit.isAdult = true;
  } else if (hobbit.age === 101) {
    hobbit.isOld = true;
  }
  return hobbit;
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!';
  } else {
    return 'You can\'t have it!';
  }
}

function meetPeople(hobbit, people) {
  people.forEach(function(person) {
    hobbit.acquaintances.push(person);
  })
  return hobbit;
}

function findFriends(hobbit) {
  var friends = []
  hobbit.acquaintances.forEach(function(person) {
    if (person.relationship === 'friend') {
      friends.push(person.name);
    }
  })
  return friends;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}