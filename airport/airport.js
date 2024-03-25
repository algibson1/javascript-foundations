function createAirport(name, airlines, availableGates) {
  var airport = {
    name: name,
    airlines: airlines,
    availableGates: availableGates,
    message: undefined,
  }

  return airport;
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, gates) {
  if (airport.availableGates >= gates) {
    airport.availableGates -= gates;
    airport.message = `Success! Current availability is ${airport.availableGates}.`;
  } else {
    airport.message = `Oh no! Not enough gates available. Current overflow is ${gates - airport.availableGates}.`;
    airport.availableGates = 0
  }
  return airport;
}

function checkAirlineLocations(airports, airline) {
  carriers = []
  airports.forEach(function(airport) {
    if (airport.airlines.includes(airline)) {
      carriers.push(airport.name);
    }
  })
  return carriers;
}


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
