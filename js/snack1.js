// SNACK 1: array di oggetti bici, stampo la più leggera

const bikes = [
  { name: 'Bianchi Oltre', weight: 7.2 },
  { name: 'Pinarello Dogma', weight: 6.8 },
  { name: 'Colnago V4', weight: 7.0 },
  { name: 'Cervélo R5', weight: 6.5 }
];

// parto dalla prima bici e la sostituisco ogni volta che ne trovo una più leggera
let lightestBike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lightestBike.weight) {
    lightestBike = bikes[i];
  }
}

console.log(lightestBike);

// destructuring per stampare in pagina
const { name, weight } = lightestBike;
document.getElementById('lightest-bike').innerText = `La bici più leggera è ${name}: ${weight} kg`;
