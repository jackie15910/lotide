const assertEqual = function(firstArray, secondArray) {
  let result = eqArrays(firstArray, secondArray);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray === secondArray) {
    return true;
  }
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  if (firstArray === null || secondArray === null) {
    return false;
  }
  let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  } return result;
};

const words = ["ground", "control", "to", "major", "tom"];

//displaying before and after
/* const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
} */

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/* const results1 =  */map(words, word => word[0]);

/* console.log(results1); */

(assertEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));

//Short way
/* const results1 = words.map(word => word[0]);
console.log(results1); */