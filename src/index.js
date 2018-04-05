import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';
var getRandomItem = uniqueRandomArray(starWarsNames);
var random = (number=1) => {
  number = Math.min(number, starWarsNames.length);
  if (number <= 0) {
    return undefined;
  } else if (number === 1) {
    return getRandomItem();
  } else {
    return Array(number).fill().map(getRandomItem);
  }
};

module.exports = {
  all: starWarsNames,
  random,
};


