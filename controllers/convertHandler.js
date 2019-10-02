/*
*
*
*       Complete the handler logic below
*       
*       
*/

const conversionTable = {
  gal: 'l',
  l: 'gal',
  lbs: 'kg',
  kg: 'lbs',
  mi: 'km',
  km: 'mi'
};

const conversionFactors = {
  gal: 3.78541,
  l: 1 / 3.78541,
  lbs: 0.453592,
  kg: 1 / 0.453592,
  mi: 1.60934,
  km: 1 / 1.60934,
}

const unitName = {
  gal: 'gallons',
  l: 'litres',
  lbs: 'pounds',
  kg: 'kilograms',
  mi: 'miles',
  km: 'kilometers'
};

function ConvertHandler() {
  this.getNum = input => {
    let result = 1;
    
    const regex = /^([0-9]+[,.]?[0-9]*([\/]{0,1}[0-9]+[,.]?[0-9]*)*)/;
    const matches = input.match(regex);

    if (matches !== null) {
      const num = matches[1].split('/');
      result = num.length > 1 ? num[0] / num[1] : num[0];
      result = num.length > 2 ? undefined : result;
    }

    return result;
  };
  
  this.getUnit = input => {
    let result = undefined;

    const str = input.replace(/[^a-z]/gi, '');
    if (conversionTable.hasOwnProperty(str.toLowerCase())) result = str;
    
    return result;
  };
  
  this.getReturnUnit = initUnit => conversionTable[initUnit.toLowerCase()];
  this.spellOutUnit = unit => unitName[unit];
  
  this.convert = (initNum, initUnit) => parseFloat((initNum * conversionFactors[initUnit.toLowerCase()]).toFixed(5));
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) =>
    `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
}

module.exports = ConvertHandler;
