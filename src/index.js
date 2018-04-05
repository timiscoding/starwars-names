import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';
var getRandomItem = uniqueRandomArray(starWarsNames);
var random = (number=1) => number === 1 ? getRandomItem() : Array(number).map(getRandomItem);

module.exports = {
  all: starWarsNames,
  random,
};


