// const { species, hours } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

/* const days  = {
  Tuesday: {officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,},
 Wednesday: {officeHour:`Open from ${hours.Wednesday.open} am until ${hours.Wednesday.close}pm`,},
 Thursday: {officeHour:`Open from ${hours.Thursday.open} am until ${hours.Thursday.close}pm`,},
 Friday: {officeHour:`Open from ${hours.Friday.open} am until ${hours.Friday.close}pm`,},
 Saturday: {officeHour:`Open from ${hours.Saturday.open} am until ${hours.Saturday.close}pm`,},
 Sunday: {officeHour:`Open from ${hours.Sunday.open} am until ${hours.Sunday.close}pm`,},
 Monday:{officeHour:`Open from ${hours.Monday.open} am until ${hours.Monday.close}pm`,},
}
//console.log(days);

const animales = species.map((elemento) => elemento.availability);
console.log(animales)
//const animales = species.map((item) =>{
//console.log(animales);
function getSchedule(scheduleTarget) {
  // const hora = data.hours.map((hours) => console.log(hours));
}
getSchedule();
module.exports = getSchedule;

/* - Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
- Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
- Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
- Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição. */
