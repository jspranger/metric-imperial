/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
  suite('Function convertHandler.getNum(input)', () =>  {
    test('Whole number input', done => {
      const input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', done => {
      const input = '3.2mi';
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });
    
    test('Fractional Input', done => {
      const input = '6/2kg';
      assert.equal(convertHandler.getNum(input), 3);
      done();
    });
    
    test('Fractional Input w/ Decimal', done => {
      const input = '4.4/2.2kg';
      assert.equal(convertHandler.getNum(input), 2);
      done();
    });
    
    test('Invalid Input (double fraction)', done => {
      const input = '1/2.2/3.023lbs';
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });
    
    test('No Numerical Input', done => {
      const input = 'km';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
  });
  
  suite('Function convertHandler.getUnit(input)', () => {
    test('For Each Valid Unit Inputs', done => {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach( ele => {
          assert.equal(convertHandler.getUnit(ele), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', done => {
      const input = '15ole';
      assert.equal(convertHandler.getUnit(input), undefined);
      done();
    });  
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', () => {
    test('For Each Valid Unit Inputs', done => {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', () => {
    test('For Each Valid Unit Inputs', done => {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });
  
  suite('Function convertHandler.convert(num, unit)', () => {
    test('Gal to L', done => {
      const input = [5, 'gal'];
      const expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', done => {
      const input = [12, 'L'];
      const expected = 3.17007;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', done => {
      const input = [5, 'mi'];
      const expected = 8.0467;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', done => {
      const input = [100, 'km'];
      const expected = 62.13727;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', done => {
      const input = [8, 'lbs'];
      const expected = 3.62874;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', done => {
      const input = [10, 'kg'];
      const expected = 22.04624;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
  });
});
