// SNACK 2: squadre con valori random, poi nuovo array con solo nome e falli subiti

const teams = [
  { name: 'Juventus', points: 0, fouls: 0 },
  { name: 'Torino', points: 0, fouls: 0 },
  { name: 'Milan', points: 0, fouls: 0 },
  { name: 'Napoli', points: 0, fouls: 0 }
];

// numero random tra min e max compresi
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. sostituisco gli 0 con numeri random
for (let i = 0; i < teams.length; i++) {
  teams[i].points = getRandomNumber(0, 90);
  teams[i].fouls = getRandomNumber(0, 50);
}

// 2. nuovo array solo con nome e falli subiti
const teamsFouls = [];

for (let i = 0; i < teams.length; i++) {
  const { name, fouls } = teams[i];
  teamsFouls.push({ name, fouls });
}

console.log(teams);
console.log(teamsFouls);
