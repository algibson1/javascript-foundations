function createPlayer(name, age, moveset) {
  var player = {
    name: name,
    age: age,
    moveset: moveset
  }
  return player;
}

function createLevel(name, players) {
  var level = {
    name: name,
    players: players,
    coins: 0,
    lives: 3
  }
  return level;
}

function findCoins(level, coins) {
  level.coins += coins;
  if (level.coins >= 100) {
    level.lives += 1;
  }
  return level;
}

function defeatPlayer(level) {
  level.lives -= 1;
  if (level.lives === 0) {
    return 'GAME OVER';
  }
  return level;
}

module.exports = { 
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer
};