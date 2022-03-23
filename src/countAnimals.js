const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único.
// usei um if para verificar se o não for passado nenhum parametro, ele fala que se o parametro for diferente a animal executa a arrow function
// operador logico not (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos
// olhei o git https://github.com/tryber/sd-020-a-project-zoo-functions/pull/44/files
function countAnimals(animal) {
  const qtd = {};
  species.forEach((item) => { qtd[item.name] = item.residents.length; });

  if (!animal) {
    return qtd;
  }
  if (!animal.sex) {
    const specie = species.find((item) => item.name === animal.specie).residents.length;
    return specie;
  }
  const specie = species.find((item) => item.name === animal.specie);
  const sex = specie.residents.filter((item) => item.sex === animal.sex).length;
  return sex;
}
countAnimals({ specie: 'elephants' });

module.exports = countAnimals;
/* - Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
  - Com o argumento `{ specie: 'penguins' }`, retorna um número, a quantidade de pinguins no zoológico;
  - Com o argumento `{ specie: 'giraffes', sex: 'female' }`, retorna um número, a quantidade de girafas do sexo feminino.
**O que será avaliado**
  - Sem parâmetros, retorna as espécies e sua quantidade;
  - Recebendo como parâmetro um objeto com a chave `specie`, retorna um número, a quantidade de animais daquela espécie;
  - Recebendo como parâmetro um objeto com a chave `specie` e `sex`, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado. */
