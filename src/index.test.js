var { expect } = require('chai');
var starWars = require('./index');

describe('starwars-names', () => {
  describe('all', () => {
    it('should return an array of strings', () => {
      const isArrayOfStrings = (arr) => arr.every(el => typeof el === 'string');
      expect(starWars.all).to.satisfy(isArrayOfStrings);
    });

    it('should contain Luke Skywalker', () => {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random character', () => {
      const randomChar = starWars.random();
      expect(starWars.all).to.include(randomChar);
    });
  });
});