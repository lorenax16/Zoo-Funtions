const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if(!employeeName){
    return {};
  }
  const collaborator1 = data.employees.find((item) => item.firstName === employeeName);
  const collaborator2 = data.employees.find((item) => item.lastName === employeeName);

  return collaborator1 || collaborator2;
}
console.log(getEmployeeByName('Nelson'));
// o return olhei o git de nina https://github.com/tryber/sd-020-a-project-zoo-functions/pull/78/files
module.exports = getEmployeeByName;
