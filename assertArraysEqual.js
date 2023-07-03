const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  let result = eqArrays(firstArray, secondArray);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;