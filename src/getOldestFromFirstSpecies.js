const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((item) => item.id === id).responsibleFor[0];
  const animalOld = data.species.find((item) => item.id === funcionario).residents;
  const maior = animalOld.reduce((a, b) => {
    if (a.age > b.age) {
      return a;
    }
    return b;
  });
  return Object.values(maior);
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
