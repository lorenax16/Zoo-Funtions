// const { TestWatcher } = require('jest');
const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function busca(dias) {
  const animal = data.species.filter((item) => item.availability.includes(dias));
  const name = animal.map((item) => item.name);
  return name;
}
busca();

const days = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: busca('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: busca('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: busca('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: busca('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: busca('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: busca('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget) {
  const semana = Object.keys(days);
  if (semana.includes(scheduleTarget)) {
    return { [scheduleTarget]: days[scheduleTarget] };
  }
  if (species.some((item) => item.name === scheduleTarget)) {
    const arrayAnimal = species.find((item) => item.name === scheduleTarget);
    return arrayAnimal.availability.map((item) => item);
  }
  return days;
}

getSchedule('lions');
module.exports = getSchedule;

/* - Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
- Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
- Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
- Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição. */
