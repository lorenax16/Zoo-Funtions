const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nameAnimal = data.species.find((item)=> item.name === animal).residents;
  const ageAnimal = nameAnimal.every((item)=> item.age > age);
   return ageAnimal;
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
