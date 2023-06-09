const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((item) => item.managers.includes(id));
  return manager;
}
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992');

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const person = employees.filter((elemento) => elemento.managers.includes(managerId))
    .map((item) => `${item.firstName} ${item.lastName}`);
  return person;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
