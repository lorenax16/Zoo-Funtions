const data = require('../data/zoo_data');
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const menor = entrants.filter((item) => (item.age < 18)).length
  const maior = entrants.filter((item) => (item.age >= 18 && item.age < 50)).length;
  const tercera = entrants.filter((item) => (item.age >= 50)).length;
  
  return { child:menor , adult:maior , senior:tercera};
}

console.log(countEntrants( [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_operador de negacao !
// objeto vazio neste site https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery
function calculateEntry(entrants) {
  if(!entrants || Object.keys(entrants).length === 0){
    return 0;
  }
  const pessoa = countEntrants(entrants);
  //console.log(pessoa)
  const preco = (pessoa.child * 20.99) + (pessoa.adult * 49.99) + (pessoa.senior * 24.99);
  //console.log(preco);
  return preco;
}
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
