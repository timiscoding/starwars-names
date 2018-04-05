import { expect } from 'chai';
import starWars from './index';

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

    it('should return an array of random items', () => {
      const items = starWars.random(3);
      for (let i=0; i<items.length; i++) {
        expect(starWars.all).to.include(items[i]);
      }
    });

    it('should return at maximum all the items if the number exceeds the items in the array', () => {
      const items = starWars.random(200);
      items.forEach(item => {
        expect(starWars.all).to.include(item);
      });
      expect(items.length).to.equal(starWars.all.length);
    });

    it('should return undefined if negative number or zero is provided', () => {
      const zeroItems = starWars.random(0);
      const negItems = starWars.random(-1);
      expect(zeroItems).to.be.undefined;
      expect(negItems).to.be.undefined;
    })
  });
});
